router.get('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isEmail(email)) {
      throw new Error('Email must be a valid email address.');
    }
    if (typeof password !== 'string') {
      throw new Error('Password must be a string.');
    }
    const user = new User({ email, password });
    const persistedUser = await user.save();
    const userId = persistedUser._id;

    const session = await initSession(userId);

    res
      .cookie('token', session.token, {
        httpOnly: true,
        sameSite: true,
        maxAge: 1209600000,
        secure: process.env.NODE_ENV === 'production',
      })
      .status(201)
      .json({
        title: 'User Retrieval Successful',
        detail: 'Successfully Retrieved new user',
        csrfToken: session.csrfToken,
      });
  } catch (err) {
    res.status(400).json({
      errors: [
        {
          title: 'Retrieval Error',
          detail: 'Something went wrong during Retrieval process.',
          errorMessage: err.message,
        },
      ],
    });
  }
});

router.get('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!isEmail(email)) {
        return res.status(400).json({
          errors: [
            {
              title: 'Bad Request',
              detail: 'Email must be a valid email address',
            },
          ],
        });
      }
      if (typeof password !== 'string') {
        return res.status(400).json({
          errors: [
            {
              title: 'Bad Request',
              detail: 'Password must be a string',
            },
          ],
        });
      }
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error();
      }
      const userId = user._id;
  
      const passwordValidated = await bcrypt.compare(password, user.password);
      if (!passwordValidated) {
        throw new Error();
      }
  
      const session = await initSession(userId);
  
      res
        .cookie('token', session.token, {
          httpOnly: true,
          sameSite: true,
          maxAge: 1209600000,
          secure: process.env.NODE_ENV === 'production',
        })
        .json({
          title: 'Retrieval Successful',
          detail: 'Successfully retrieved user credentials',
          csrfToken: session.csrfToken,
        });
    } catch (err) {
      res.status(401).json({
        errors: [
          {
            title: 'Invalid Credentials',
            detail: 'Check email and password combination',
            errorMessage: err.message,
          },
        ],
      });
    }
  });


  router.get('/me', authenticate, async (req, res) => {
    try {
      const { userId } = req.session;
      const user = await User.findById({ _id: userId }, { email: 1, _id: 0 });
  
      res.json({
        title: 'Authentication successful',
        detail: 'Successfully authenticated user',
        user,
      });
    } catch (err) {
      res.status(401).json({
        errors: [
          {
            title: 'Unauthorized',
            detail: 'Not authorized to access this route',
            errorMessage: err.message,
          },
        ],
      });
    }
  });