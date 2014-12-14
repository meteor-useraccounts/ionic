// Simply 'inherites' helpers from AccountsTemplates
Template.atSocial.helpers(AccountsTemplates.atSocialHelpers);
// Simply 'inherites' events from AccountsTemplates
Template.atSocial.events(AccountsTemplates.atSocialEvents);

AccountsTemplates.configure({
  texts: {
    socialIcons: {
      facebook: "icon ion-social-facebook",
      twitter: "icon ion-social-twitter",
      google: "icon ion-social-google",
      github: "icon ion-social-github",
      linkedin: "icon ion-social-linkedin",
      instagram: "icon ion-social-instagram"
    }
  }
});
