[![Meteor Icon](http://icon.meteor.com/package/useraccounts:ionic)](https://atmospherejs.com/useraccounts/ionic)
[![Build Status](https://travis-ci.org/meteor-useraccounts/ionic.svg?branch=master)](https://travis-ci.org/meteor-useraccounts/ionic)

useraccounts:ionic
==================

Meteor sign up and sign in templates styled for Ionic

This package depends on [useraccounts:core](https://atmospherejs.com/useraccounts/core)

Learn more [here](http://useraccounts.meteor.com) or have a look at the full [documentation](https://github.com/meteor-useraccounts/core).

**Note:** At the moment Ionic does not support form validation.
So it is mandatory to configure UserAccounts with, at least,

```javascript
AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,
});
```


## Bring Your Own Ionic

Adding this package with `meteor add useraccounts:ionic` does not add any other packages providing Ionic. This is to let you choose the flavour you prefer, being it compiled, less, sass, or from CDN!

At the moment it is up to date with Ionic 2.0.0.


## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.

Thanks to all those who have contributed code changes to [this package](https://github.com/meteor-useraccounts/ionic/graphs/contributors) as well as to the [core package](https://github.com/meteor-useraccounts/core/graphs/contributors) and all who have helped by submitting bug reports and feature ideas.
