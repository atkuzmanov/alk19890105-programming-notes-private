//- trigger alternate masthead and config v18
IBMCore.common.util.config.set({
  masthead: {
    type: drupalSettings.ibm_cloud.config.masthead.type,  // default|alternate
  },
  footer: {
    type: drupalSettings.ibm_cloud.config.footer.type, // default|alternate
  }
});

