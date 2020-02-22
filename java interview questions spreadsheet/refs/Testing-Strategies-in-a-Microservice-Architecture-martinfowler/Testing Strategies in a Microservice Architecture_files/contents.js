
/* highlight sequence for modules */
window.modules = new HighlightSequence("anatomy-modules","resources-description","domain-description","external-description","persistence-description");
window.anatomy_modules_resources_description = {
forwards:  function() {return modules.fadeIn();},
backwards: function() {return modules.fadeOut();},
setup_forwards: function() {return modules.setupAtStart();},
setup_backwards: function() {return modules.setupAtEnd().show();}
};
window.anatomy_modules_domain_description = modules;
window.anatomy_modules_external_description = modules;
window.anatomy_modules_persistence_description = modules;



/* highlight sequence for connections */
window.connections = new HighlightSequence("anatomy-connections","resources-delegation-description","service-or-direct-description","external-service-connection-description","external-datastore-connection-description","external-service-testing-description");
window.anatomy_connections_resources_delegation_description = {
forwards:  function() {return connections.fadeIn();},
backwards: function() {return connections.fadeOut();},
setup_forwards: function() {return connections.setupAtStart();},
setup_backwards: function() {return connections.setupAtEnd().show();}
};
window.anatomy_connections_service_or_direct_description = connections;
window.anatomy_connections_external_service_connection_description = connections;
window.anatomy_connections_external_datastore_connection_description = connections;
window.anatomy_connections_external_service_testing_description = connections;



/* highlight sequence for unit_testing_types */
window.unit_testing_types = new HighlightSequence("testing-unit-diagram","classic-domain-description","mockist-plumbing-description","mockist-coordination-description");
window.testing_unit_diagram_classic_domain_description = {
forwards:  function() {return unit_testing_types.fadeIn();},
backwards: function() {return unit_testing_types.fadeOut();},
setup_forwards: function() {return unit_testing_types.setupAtStart();},
setup_backwards: function() {return unit_testing_types.setupAtEnd().show();}
};
window.testing_unit_diagram_mockist_plumbing_description = unit_testing_types;
window.testing_unit_diagram_mockist_coordination_description = unit_testing_types;



/* highlight sequence for integration_boundaries */
window.integration_boundaries = new HighlightSequence("testing-integration-diagram","external-service-integration","datastore-integration");
window.testing_integration_diagram_external_service_integration = {
forwards:  function() {return integration_boundaries.fadeIn();},
backwards: function() {return integration_boundaries.fadeOut();},
setup_forwards: function() {return integration_boundaries.setupAtStart();},
setup_backwards: function() {return integration_boundaries.setupAtEnd().show();}
};
window.testing_integration_diagram_datastore_integration = integration_boundaries;



/* highlight sequence for in_process_component_tests */
window.in_process_component_tests = new HighlightSequence("testing-component-in-process-diagram","in-process-microservice","in-process-stub","in-memory-datastore","internal-resources");
window.testing_component_in_process_diagram_in_process_microservice = {
forwards:  function() {return in_process_component_tests.fadeIn();},
backwards: function() {return in_process_component_tests.fadeOut();},
setup_forwards: function() {return in_process_component_tests.setupAtStart();},
setup_backwards: function() {return in_process_component_tests.setupAtEnd().show();}
};
window.testing_component_in_process_diagram_in_process_stub = in_process_component_tests;
window.testing_component_in_process_diagram_in_memory_datastore = in_process_component_tests;
window.testing_component_in_process_diagram_internal_resources = in_process_component_tests;



/* highlight sequence for out_of_process_component_tests */
window.out_of_process_component_tests = new HighlightSequence("testing-component-out-of-process-diagram","network-server","integration-points","stub-services");
window.testing_component_out_of_process_diagram_network_server = {
forwards:  function() {return out_of_process_component_tests.fadeIn();},
backwards: function() {return out_of_process_component_tests.fadeOut();},
setup_forwards: function() {return out_of_process_component_tests.setupAtStart();},
setup_backwards: function() {return out_of_process_component_tests.setupAtEnd().show();}
};
window.testing_component_out_of_process_diagram_integration_points = out_of_process_component_tests;
window.testing_component_out_of_process_diagram_stub_services = out_of_process_component_tests;



/* highlight sequence for contract_test_example */
window.contract_test_example = new HighlightSequence("testing-contract-diagram","producer-api","consumer-a","consumer-b","consumer-c","producer-change");
window.testing_contract_diagram_producer_api = {
forwards:  function() {return contract_test_example.fadeIn();},
backwards: function() {return contract_test_example.fadeOut();},
setup_forwards: function() {return contract_test_example.setupAtStart();},
setup_backwards: function() {return contract_test_example.setupAtEnd().show();}
};
window.testing_contract_diagram_consumer_a = contract_test_example;
window.testing_contract_diagram_consumer_b = contract_test_example;
window.testing_contract_diagram_consumer_c = contract_test_example;
window.testing_contract_diagram_producer_change = contract_test_example;


function initialize_deck() {
deck = new Infodeck({"contents":[{"uri":"cover.html"},{"uri":"agenda.html"},{"uri":"definition.html"},{"uri":"anatomy-modules.html"},{"uri":"anatomy-connections.html"},{"uri":"architecture.html"},{"uri":"testing-unit-introduction.html"},{"uri":"testing-unit-diagram.html"},{"uri":"testing-progress-1.html"},{"uri":"testing-integration-introduction.html"},{"uri":"testing-integration-diagram.html"},{"uri":"testing-progress-2.html"},{"uri":"testing-component-introduction.html"},{"uri":"testing-component-in-process-diagram.html"},{"uri":"testing-component-internal-resources.html"},{"uri":"testing-component-out-of-process-diagram.html"},{"uri":"testing-progress-3.html"},{"uri":"testing-contract-introduction.html"},{"uri":"testing-contract-diagram.html"},{"uri":"testing-end-to-end-introduction.html"},{"uri":"testing-end-to-end-diagram.html"},{"uri":"testing-end-to-end-tips.html"},{"uri":"conclusion-options.html"},{"uri":"conclusion-test-pyramid.html"},{"uri":"conclusion-summary.html"}]});

// ---- for slide anatomy-modules----------------------------------------
window.deck.addBuild('anatomy-modules', 
  {
    forwards: function () {
      window.anatomy_modules_resources_description.forwards();
    },

    backwards: function () {
      window.anatomy_modules_resources_description.backwards();
    }
  }
);
window.deck.addBuild('anatomy-modules', 
  {
    forwards: function () {
      window.anatomy_modules_domain_description.forwards();
    },

    backwards: function () {
      window.anatomy_modules_domain_description.backwards();
    }
  }
);
window.deck.addBuild('anatomy-modules', 
  {
    forwards: function () {
      window.anatomy_modules_external_description.forwards();
    },

    backwards: function () {
      window.anatomy_modules_external_description.backwards();
    }
  }
);
window.deck.addBuild('anatomy-modules', 
  {
    forwards: function () {
      window.anatomy_modules_persistence_description.forwards();
    },

    backwards: function () {
      window.anatomy_modules_persistence_description.backwards();
    }
  }
);
window.deck.addSetupBuild('anatomy-modules', 
  {
    forwards: function () {
      window.anatomy_modules_persistence_description.setup_forwards();
      window.anatomy_modules_external_description.setup_forwards();
      window.anatomy_modules_domain_description.setup_forwards();
      window.anatomy_modules_resources_description.setup_forwards();
    },
    backwards: function () {
      window.anatomy_modules_resources_description.setup_backwards();
      window.anatomy_modules_domain_description.setup_backwards();
      window.anatomy_modules_external_description.setup_backwards();
      window.anatomy_modules_persistence_description.setup_backwards();
    }
  }
);



// ---- for slide anatomy-connections----------------------------------------
window.deck.addBuild('anatomy-connections', 
  {
    forwards: function () {
      window.anatomy_connections_resources_delegation_description.forwards();
    },

    backwards: function () {
      window.anatomy_connections_resources_delegation_description.backwards();
    }
  }
);
window.deck.addBuild('anatomy-connections', 
  {
    forwards: function () {
      window.anatomy_connections_service_or_direct_description.forwards();
    },

    backwards: function () {
      window.anatomy_connections_service_or_direct_description.backwards();
    }
  }
);
window.deck.addBuild('anatomy-connections', 
  {
    forwards: function () {
      window.anatomy_connections_external_service_connection_description.forwards();
    },

    backwards: function () {
      window.anatomy_connections_external_service_connection_description.backwards();
    }
  }
);
window.deck.addBuild('anatomy-connections', 
  {
    forwards: function () {
      window.anatomy_connections_external_datastore_connection_description.forwards();
    },

    backwards: function () {
      window.anatomy_connections_external_datastore_connection_description.backwards();
    }
  }
);
window.deck.addBuild('anatomy-connections', 
  {
    forwards: function () {
      window.anatomy_connections_external_service_testing_description.forwards();
      $('#anatomy-connections .external-service-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#anatomy-connections .external-service-highlight-panel').removeClass('hidden');}, 50);
    },

    backwards: function () {
      window.anatomy_connections_external_service_testing_description.backwards();
      $('#anatomy-connections .external-service-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#anatomy-connections .external-service-highlight-panel').addClass('no-display');}, 400);
    }
  }
);
window.deck.addSetupBuild('anatomy-connections', 
  {
    forwards: function () {
      window.anatomy_connections_external_service_testing_description.setup_forwards();
      $('#anatomy-connections .external-service-highlight-panel').addClass('fadeable');
      $('#anatomy-connections .external-service-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#anatomy-connections .external-service-highlight-panel').addClass('no-display');}, 400);
      window.anatomy_connections_external_datastore_connection_description.setup_forwards();
      window.anatomy_connections_external_service_connection_description.setup_forwards();
      window.anatomy_connections_service_or_direct_description.setup_forwards();
      window.anatomy_connections_resources_delegation_description.setup_forwards();
    },
    backwards: function () {
      window.anatomy_connections_resources_delegation_description.setup_backwards();
      window.anatomy_connections_service_or_direct_description.setup_backwards();
      window.anatomy_connections_external_service_connection_description.setup_backwards();
      window.anatomy_connections_external_datastore_connection_description.setup_backwards();
      window.anatomy_connections_external_service_testing_description.setup_backwards();
      $('#anatomy-connections .external-service-highlight-panel').addClass('fadeable');
      $('#anatomy-connections .external-service-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#anatomy-connections .external-service-highlight-panel').removeClass('hidden');}, 50);
    }
  }
);



// ---- for slide architecture----------------------------------------
window.deck.addBuild('architecture', 
  {
    forwards: function () {
      $('#architecture .mask').addClass('hidden');
      window.setTimeout(function () {$('#architecture .mask').addClass('no-display');}, 400);
      $('#architecture .message-interchange-format').addClass('hidden');
      window.setTimeout(function () {$('#architecture .message-interchange-format').addClass('no-display');}, 400);
      $('#architecture .failure-modes').addClass('hidden');
      window.setTimeout(function () {$('#architecture .failure-modes').addClass('no-display');}, 400);
      $('#architecture .external-services').removeClass('no-display');
      window.setTimeout(function () {$('#architecture .external-services').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#architecture .mask').removeClass('no-display');
      window.setTimeout(function () {$('#architecture .mask').removeClass('hidden');}, 50);
      $('#architecture .message-interchange-format').removeClass('no-display');
      window.setTimeout(function () {$('#architecture .message-interchange-format').removeClass('hidden');}, 50);
      $('#architecture .failure-modes').removeClass('no-display');
      window.setTimeout(function () {$('#architecture .failure-modes').removeClass('hidden');}, 50);
      $('#architecture .external-services').addClass('hidden');
      window.setTimeout(function () {$('#architecture .external-services').addClass('no-display');}, 400);
    }
  }
);
window.deck.addSetupBuild('architecture', 
  {
    forwards: function () {
      $('#architecture .mask').addClass('fadeable');
      $('#architecture .mask').removeClass('no-display');
      window.setTimeout(function () {$('#architecture .mask').removeClass('hidden');}, 50);
      $('#architecture .message-interchange-format').addClass('fadeable');
      $('#architecture .message-interchange-format').removeClass('no-display');
      window.setTimeout(function () {$('#architecture .message-interchange-format').removeClass('hidden');}, 50);
      $('#architecture .failure-modes').addClass('fadeable');
      $('#architecture .failure-modes').removeClass('no-display');
      window.setTimeout(function () {$('#architecture .failure-modes').removeClass('hidden');}, 50);
      $('#architecture .external-services').addClass('fadeable');
      $('#architecture .external-services').addClass('hidden');
      window.setTimeout(function () {$('#architecture .external-services').addClass('no-display');}, 400);
    },
    backwards: function () {
      $('#architecture .mask').addClass('fadeable');
      $('#architecture .mask').addClass('hidden');
      window.setTimeout(function () {$('#architecture .mask').addClass('no-display');}, 400);
      $('#architecture .message-interchange-format').addClass('fadeable');
      $('#architecture .message-interchange-format').addClass('hidden');
      window.setTimeout(function () {$('#architecture .message-interchange-format').addClass('no-display');}, 400);
      $('#architecture .failure-modes').addClass('fadeable');
      $('#architecture .failure-modes').addClass('hidden');
      window.setTimeout(function () {$('#architecture .failure-modes').addClass('no-display');}, 400);
      $('#architecture .external-services').addClass('fadeable');
      $('#architecture .external-services').removeClass('no-display');
      window.setTimeout(function () {$('#architecture .external-services').removeClass('hidden');}, 50);
    }
  }
);



// ---- for slide testing-unit-diagram----------------------------------------
window.deck.addBuild('testing-unit-diagram', 
  {
    forwards: function () {
      window.testing_unit_diagram_classic_domain_description.forwards();
      $('#testing-unit-diagram .intro-text').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .intro-text').addClass('no-display');}, 400);
    },

    backwards: function () {
      window.testing_unit_diagram_classic_domain_description.backwards();
      $('#testing-unit-diagram .intro-text').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .intro-text').removeClass('hidden');}, 50);
    }
  }
);
window.deck.addBuild('testing-unit-diagram', 
  {
    forwards: function () {
      window.testing_unit_diagram_mockist_plumbing_description.forwards();
      $('#testing-unit-diagram .repositories-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .repositories-highlight-panel').removeClass('hidden');}, 50);
    },

    backwards: function () {
      window.testing_unit_diagram_mockist_plumbing_description.backwards();
      $('#testing-unit-diagram .repositories-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .repositories-highlight-panel').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-unit-diagram', 
  {
    forwards: function () {
      window.testing_unit_diagram_mockist_coordination_description.forwards();
      $('#testing-unit-diagram .repositories-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .repositories-highlight-panel').addClass('no-display');}, 400);
      $('#testing-unit-diagram .resources-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .resources-highlight-panel').removeClass('hidden');}, 50);
    },

    backwards: function () {
      window.testing_unit_diagram_mockist_coordination_description.backwards();
      $('#testing-unit-diagram .repositories-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .repositories-highlight-panel').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .resources-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .resources-highlight-panel').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-unit-diagram', 
  {
    forwards: function () {
      $('#testing-unit-diagram .mockist-coordination-description').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .mockist-coordination-description').addClass('no-display');}, 400);
      $('#testing-unit-diagram .resources-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .resources-highlight-panel').addClass('no-display');}, 400);
      $('#testing-unit-diagram .does-it-pay-off').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .does-it-pay-off').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-unit-diagram .mockist-coordination-description').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .mockist-coordination-description').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .resources-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .resources-highlight-panel').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .does-it-pay-off').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .does-it-pay-off').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-unit-diagram', 
  {
    forwards: function () {
      $('#testing-unit-diagram .does-it-pay-off').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .does-it-pay-off').addClass('no-display');}, 400);
      $('#testing-unit-diagram .mocks-overkill').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .mocks-overkill').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-unit-diagram .does-it-pay-off').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .does-it-pay-off').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .mocks-overkill').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .mocks-overkill').addClass('no-display');}, 400);
    }
  }
);
window.deck.addSetupBuild('testing-unit-diagram', 
  {
    forwards: function () {
      $('#testing-unit-diagram .does-it-pay-off').addClass('fadeable');
      $('#testing-unit-diagram .does-it-pay-off').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .does-it-pay-off').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .mocks-overkill').addClass('fadeable');
      $('#testing-unit-diagram .mocks-overkill').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .mocks-overkill').addClass('no-display');}, 400);
      $('#testing-unit-diagram .mockist-coordination-description').addClass('fadeable');
      $('#testing-unit-diagram .mockist-coordination-description').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .mockist-coordination-description').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .resources-highlight-panel').addClass('fadeable');
      $('#testing-unit-diagram .resources-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .resources-highlight-panel').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .does-it-pay-off').addClass('fadeable');
      $('#testing-unit-diagram .does-it-pay-off').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .does-it-pay-off').addClass('no-display');}, 400);
      window.testing_unit_diagram_mockist_coordination_description.setup_forwards();
      $('#testing-unit-diagram .repositories-highlight-panel').addClass('fadeable');
      $('#testing-unit-diagram .repositories-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .repositories-highlight-panel').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .resources-highlight-panel').addClass('fadeable');
      $('#testing-unit-diagram .resources-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .resources-highlight-panel').addClass('no-display');}, 400);
      window.testing_unit_diagram_mockist_plumbing_description.setup_forwards();
      $('#testing-unit-diagram .repositories-highlight-panel').addClass('fadeable');
      $('#testing-unit-diagram .repositories-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .repositories-highlight-panel').addClass('no-display');}, 400);
      window.testing_unit_diagram_classic_domain_description.setup_forwards();
      $('#testing-unit-diagram .intro-text').addClass('fadeable');
      $('#testing-unit-diagram .intro-text').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .intro-text').removeClass('hidden');}, 50);
    },
    backwards: function () {
      window.testing_unit_diagram_classic_domain_description.setup_backwards();
      $('#testing-unit-diagram .intro-text').addClass('fadeable');
      $('#testing-unit-diagram .intro-text').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .intro-text').addClass('no-display');}, 400);
      window.testing_unit_diagram_mockist_plumbing_description.setup_backwards();
      $('#testing-unit-diagram .repositories-highlight-panel').addClass('fadeable');
      $('#testing-unit-diagram .repositories-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .repositories-highlight-panel').removeClass('hidden');}, 50);
      window.testing_unit_diagram_mockist_coordination_description.setup_backwards();
      $('#testing-unit-diagram .repositories-highlight-panel').addClass('fadeable');
      $('#testing-unit-diagram .repositories-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .repositories-highlight-panel').addClass('no-display');}, 400);
      $('#testing-unit-diagram .resources-highlight-panel').addClass('fadeable');
      $('#testing-unit-diagram .resources-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .resources-highlight-panel').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .mockist-coordination-description').addClass('fadeable');
      $('#testing-unit-diagram .mockist-coordination-description').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .mockist-coordination-description').addClass('no-display');}, 400);
      $('#testing-unit-diagram .resources-highlight-panel').addClass('fadeable');
      $('#testing-unit-diagram .resources-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .resources-highlight-panel').addClass('no-display');}, 400);
      $('#testing-unit-diagram .does-it-pay-off').addClass('fadeable');
      $('#testing-unit-diagram .does-it-pay-off').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .does-it-pay-off').removeClass('hidden');}, 50);
      $('#testing-unit-diagram .does-it-pay-off').addClass('fadeable');
      $('#testing-unit-diagram .does-it-pay-off').addClass('hidden');
      window.setTimeout(function () {$('#testing-unit-diagram .does-it-pay-off').addClass('no-display');}, 400);
      $('#testing-unit-diagram .mocks-overkill').addClass('fadeable');
      $('#testing-unit-diagram .mocks-overkill').removeClass('no-display');
      window.setTimeout(function () {$('#testing-unit-diagram .mocks-overkill').removeClass('hidden');}, 50);
    }
  }
);



// ---- for slide testing-integration-diagram----------------------------------------
window.deck.addBuild('testing-integration-diagram', 
  {
    forwards: function () {
      window.testing_integration_diagram_external_service_integration.forwards();
      $('#testing-integration-diagram .basic-pathways-description').addClass('hidden');
      window.setTimeout(function () {$('#testing-integration-diagram .basic-pathways-description').addClass('no-display');}, 400);
    },

    backwards: function () {
      window.testing_integration_diagram_external_service_integration.backwards();
      $('#testing-integration-diagram .basic-pathways-description').removeClass('no-display');
      window.setTimeout(function () {$('#testing-integration-diagram .basic-pathways-description').removeClass('hidden');}, 50);
    }
  }
);
window.deck.addBuild('testing-integration-diagram', 
  {
    forwards: function () {
      window.testing_integration_diagram_datastore_integration.forwards();
    },

    backwards: function () {
      window.testing_integration_diagram_datastore_integration.backwards();
    }
  }
);
window.deck.addBuild('testing-integration-diagram', 
  {
    forwards: function () {
      $('#testing-integration-diagram .datastore-integration').addClass('hidden');
      window.setTimeout(function () {$('#testing-integration-diagram .datastore-integration').addClass('no-display');}, 400);
      $('#testing-integration-diagram .additional-notes').removeClass('no-display');
      window.setTimeout(function () {$('#testing-integration-diagram .additional-notes').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-integration-diagram .datastore-integration').removeClass('no-display');
      window.setTimeout(function () {$('#testing-integration-diagram .datastore-integration').removeClass('hidden');}, 50);
      $('#testing-integration-diagram .additional-notes').addClass('hidden');
      window.setTimeout(function () {$('#testing-integration-diagram .additional-notes').addClass('no-display');}, 400);
    }
  }
);
window.deck.addSetupBuild('testing-integration-diagram', 
  {
    forwards: function () {
      $('#testing-integration-diagram .datastore-integration').addClass('fadeable');
      $('#testing-integration-diagram .datastore-integration').removeClass('no-display');
      window.setTimeout(function () {$('#testing-integration-diagram .datastore-integration').removeClass('hidden');}, 50);
      $('#testing-integration-diagram .additional-notes').addClass('fadeable');
      $('#testing-integration-diagram .additional-notes').addClass('hidden');
      window.setTimeout(function () {$('#testing-integration-diagram .additional-notes').addClass('no-display');}, 400);
      window.testing_integration_diagram_datastore_integration.setup_forwards();
      window.testing_integration_diagram_external_service_integration.setup_forwards();
      $('#testing-integration-diagram .basic-pathways-description').addClass('fadeable');
      $('#testing-integration-diagram .basic-pathways-description').removeClass('no-display');
      window.setTimeout(function () {$('#testing-integration-diagram .basic-pathways-description').removeClass('hidden');}, 50);
    },
    backwards: function () {
      window.testing_integration_diagram_external_service_integration.setup_backwards();
      $('#testing-integration-diagram .basic-pathways-description').addClass('fadeable');
      $('#testing-integration-diagram .basic-pathways-description').addClass('hidden');
      window.setTimeout(function () {$('#testing-integration-diagram .basic-pathways-description').addClass('no-display');}, 400);
      window.testing_integration_diagram_datastore_integration.setup_backwards();
      $('#testing-integration-diagram .datastore-integration').addClass('fadeable');
      $('#testing-integration-diagram .datastore-integration').addClass('hidden');
      window.setTimeout(function () {$('#testing-integration-diagram .datastore-integration').addClass('no-display');}, 400);
      $('#testing-integration-diagram .additional-notes').addClass('fadeable');
      $('#testing-integration-diagram .additional-notes').removeClass('no-display');
      window.setTimeout(function () {$('#testing-integration-diagram .additional-notes').removeClass('hidden');}, 50);
    }
  }
);



// ---- for slide testing-component-in-process-diagram----------------------------------------
window.deck.addBuild('testing-component-in-process-diagram', 
  {
    forwards: function () {
      window.testing_component_in_process_diagram_in_process_microservice.forwards();
      $('#testing-component-in-process-diagram .advantages-disadvantages').addClass('hidden');
      window.setTimeout(function () {$('#testing-component-in-process-diagram .advantages-disadvantages').addClass('no-display');}, 400);
    },

    backwards: function () {
      window.testing_component_in_process_diagram_in_process_microservice.backwards();
      $('#testing-component-in-process-diagram .advantages-disadvantages').removeClass('no-display');
      window.setTimeout(function () {$('#testing-component-in-process-diagram .advantages-disadvantages').removeClass('hidden');}, 50);
    }
  }
);
window.deck.addBuild('testing-component-in-process-diagram', 
  {
    forwards: function () {
      window.testing_component_in_process_diagram_in_process_stub.forwards();
    },

    backwards: function () {
      window.testing_component_in_process_diagram_in_process_stub.backwards();
    }
  }
);
window.deck.addBuild('testing-component-in-process-diagram', 
  {
    forwards: function () {
      window.testing_component_in_process_diagram_in_memory_datastore.forwards();
    },

    backwards: function () {
      window.testing_component_in_process_diagram_in_memory_datastore.backwards();
    }
  }
);
window.deck.addBuild('testing-component-in-process-diagram', 
  {
    forwards: function () {
      window.testing_component_in_process_diagram_internal_resources.forwards();
    },

    backwards: function () {
      window.testing_component_in_process_diagram_internal_resources.backwards();
    }
  }
);
window.deck.addSetupBuild('testing-component-in-process-diagram', 
  {
    forwards: function () {
      window.testing_component_in_process_diagram_internal_resources.setup_forwards();
      window.testing_component_in_process_diagram_in_memory_datastore.setup_forwards();
      window.testing_component_in_process_diagram_in_process_stub.setup_forwards();
      window.testing_component_in_process_diagram_in_process_microservice.setup_forwards();
      $('#testing-component-in-process-diagram .advantages-disadvantages').addClass('fadeable');
      $('#testing-component-in-process-diagram .advantages-disadvantages').removeClass('no-display');
      window.setTimeout(function () {$('#testing-component-in-process-diagram .advantages-disadvantages').removeClass('hidden');}, 50);
    },
    backwards: function () {
      window.testing_component_in_process_diagram_in_process_microservice.setup_backwards();
      $('#testing-component-in-process-diagram .advantages-disadvantages').addClass('fadeable');
      $('#testing-component-in-process-diagram .advantages-disadvantages').addClass('hidden');
      window.setTimeout(function () {$('#testing-component-in-process-diagram .advantages-disadvantages').addClass('no-display');}, 400);
      window.testing_component_in_process_diagram_in_process_stub.setup_backwards();
      window.testing_component_in_process_diagram_in_memory_datastore.setup_backwards();
      window.testing_component_in_process_diagram_internal_resources.setup_backwards();
    }
  }
);



// ---- for slide testing-component-out-of-process-diagram----------------------------------------
window.deck.addBuild('testing-component-out-of-process-diagram', 
  {
    forwards: function () {
      window.testing_component_out_of_process_diagram_network_server.forwards();
      $('#testing-component-out-of-process-diagram .advantages-disadvantages').addClass('hidden');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .advantages-disadvantages').addClass('no-display');}, 400);
    },

    backwards: function () {
      window.testing_component_out_of_process_diagram_network_server.backwards();
      $('#testing-component-out-of-process-diagram .advantages-disadvantages').removeClass('no-display');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .advantages-disadvantages').removeClass('hidden');}, 50);
    }
  }
);
window.deck.addBuild('testing-component-out-of-process-diagram', 
  {
    forwards: function () {
      window.testing_component_out_of_process_diagram_integration_points.forwards();
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .persistence-highlight-panel').removeClass('hidden');}, 50);
    },

    backwards: function () {
      window.testing_component_out_of_process_diagram_integration_points.backwards();
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-component-out-of-process-diagram', 
  {
    forwards: function () {
      window.testing_component_out_of_process_diagram_stub_services.forwards();
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('no-display');}, 400);
    },

    backwards: function () {
      window.testing_component_out_of_process_diagram_stub_services.backwards();
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .persistence-highlight-panel').removeClass('hidden');}, 50);
    }
  }
);
window.deck.addSetupBuild('testing-component-out-of-process-diagram', 
  {
    forwards: function () {
      window.testing_component_out_of_process_diagram_stub_services.setup_forwards();
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('fadeable');
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .persistence-highlight-panel').removeClass('hidden');}, 50);
      window.testing_component_out_of_process_diagram_integration_points.setup_forwards();
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('fadeable');
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('no-display');}, 400);
      window.testing_component_out_of_process_diagram_network_server.setup_forwards();
      $('#testing-component-out-of-process-diagram .advantages-disadvantages').addClass('fadeable');
      $('#testing-component-out-of-process-diagram .advantages-disadvantages').removeClass('no-display');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .advantages-disadvantages').removeClass('hidden');}, 50);
    },
    backwards: function () {
      window.testing_component_out_of_process_diagram_network_server.setup_backwards();
      $('#testing-component-out-of-process-diagram .advantages-disadvantages').addClass('fadeable');
      $('#testing-component-out-of-process-diagram .advantages-disadvantages').addClass('hidden');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .advantages-disadvantages').addClass('no-display');}, 400);
      window.testing_component_out_of_process_diagram_integration_points.setup_backwards();
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('fadeable');
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').removeClass('no-display');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .persistence-highlight-panel').removeClass('hidden');}, 50);
      window.testing_component_out_of_process_diagram_stub_services.setup_backwards();
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('fadeable');
      $('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('hidden');
      window.setTimeout(function () {$('#testing-component-out-of-process-diagram .persistence-highlight-panel').addClass('no-display');}, 400);
    }
  }
);



// ---- for slide testing-contract-diagram----------------------------------------
window.deck.addBuild('testing-contract-diagram', 
  {
    forwards: function () {
      window.testing_contract_diagram_producer_api.forwards();
      $('#testing-contract-diagram .benefits').addClass('hidden');
      window.setTimeout(function () {$('#testing-contract-diagram .benefits').addClass('no-display');}, 400);
    },

    backwards: function () {
      window.testing_contract_diagram_producer_api.backwards();
      $('#testing-contract-diagram .benefits').removeClass('no-display');
      window.setTimeout(function () {$('#testing-contract-diagram .benefits').removeClass('hidden');}, 50);
    }
  }
);
window.deck.addBuild('testing-contract-diagram', 
  {
    forwards: function () {
      window.testing_contract_diagram_consumer_a.forwards();
    },

    backwards: function () {
      window.testing_contract_diagram_consumer_a.backwards();
    }
  }
);
window.deck.addBuild('testing-contract-diagram', 
  {
    forwards: function () {
      window.testing_contract_diagram_consumer_b.forwards();
    },

    backwards: function () {
      window.testing_contract_diagram_consumer_b.backwards();
    }
  }
);
window.deck.addBuild('testing-contract-diagram', 
  {
    forwards: function () {
      window.testing_contract_diagram_consumer_c.forwards();
    },

    backwards: function () {
      window.testing_contract_diagram_consumer_c.backwards();
    }
  }
);
window.deck.addBuild('testing-contract-diagram', 
  {
    forwards: function () {
      window.testing_contract_diagram_producer_change.forwards();
    },

    backwards: function () {
      window.testing_contract_diagram_producer_change.backwards();
    }
  }
);
window.deck.addBuild('testing-contract-diagram', 
  {
    forwards: function () {
      $('#testing-contract-diagram .producer-change').addClass('hidden');
      window.setTimeout(function () {$('#testing-contract-diagram .producer-change').addClass('no-display');}, 400);
      $('#testing-contract-diagram .design').removeClass('no-display');
      window.setTimeout(function () {$('#testing-contract-diagram .design').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-contract-diagram .producer-change').removeClass('no-display');
      window.setTimeout(function () {$('#testing-contract-diagram .producer-change').removeClass('hidden');}, 50);
      $('#testing-contract-diagram .design').addClass('hidden');
      window.setTimeout(function () {$('#testing-contract-diagram .design').addClass('no-display');}, 400);
    }
  }
);
window.deck.addSetupBuild('testing-contract-diagram', 
  {
    forwards: function () {
      $('#testing-contract-diagram .producer-change').addClass('fadeable');
      $('#testing-contract-diagram .producer-change').removeClass('no-display');
      window.setTimeout(function () {$('#testing-contract-diagram .producer-change').removeClass('hidden');}, 50);
      $('#testing-contract-diagram .design').addClass('fadeable');
      $('#testing-contract-diagram .design').addClass('hidden');
      window.setTimeout(function () {$('#testing-contract-diagram .design').addClass('no-display');}, 400);
      window.testing_contract_diagram_producer_change.setup_forwards();
      window.testing_contract_diagram_consumer_c.setup_forwards();
      window.testing_contract_diagram_consumer_b.setup_forwards();
      window.testing_contract_diagram_consumer_a.setup_forwards();
      window.testing_contract_diagram_producer_api.setup_forwards();
      $('#testing-contract-diagram .benefits').addClass('fadeable');
      $('#testing-contract-diagram .benefits').removeClass('no-display');
      window.setTimeout(function () {$('#testing-contract-diagram .benefits').removeClass('hidden');}, 50);
    },
    backwards: function () {
      window.testing_contract_diagram_producer_api.setup_backwards();
      $('#testing-contract-diagram .benefits').addClass('fadeable');
      $('#testing-contract-diagram .benefits').addClass('hidden');
      window.setTimeout(function () {$('#testing-contract-diagram .benefits').addClass('no-display');}, 400);
      window.testing_contract_diagram_consumer_a.setup_backwards();
      window.testing_contract_diagram_consumer_b.setup_backwards();
      window.testing_contract_diagram_consumer_c.setup_backwards();
      window.testing_contract_diagram_producer_change.setup_backwards();
      $('#testing-contract-diagram .producer-change').addClass('fadeable');
      $('#testing-contract-diagram .producer-change').addClass('hidden');
      window.setTimeout(function () {$('#testing-contract-diagram .producer-change').addClass('no-display');}, 400);
      $('#testing-contract-diagram .design').addClass('fadeable');
      $('#testing-contract-diagram .design').removeClass('no-display');
      window.setTimeout(function () {$('#testing-contract-diagram .design').removeClass('hidden');}, 50);
    }
  }
);



// ---- for slide testing-end-to-end-diagram----------------------------------------
window.deck.addBuild('testing-end-to-end-diagram', 
  {
    forwards: function () {
      $('#testing-end-to-end-diagram .interaction').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .interaction').addClass('no-display');}, 400);
      $('#testing-end-to-end-diagram .mask').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .mask').addClass('no-display');}, 400);
      $('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').addClass('no-display');}, 400);
      $('#testing-end-to-end-diagram .system-size').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .system-size').removeClass('hidden');}, 50);
      $('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-end-to-end-diagram .interaction').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .interaction').removeClass('hidden');}, 50);
      $('#testing-end-to-end-diagram .mask').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .mask').removeClass('hidden');}, 50);
      $('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').removeClass('hidden');}, 50);
      $('#testing-end-to-end-diagram .system-size').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .system-size').addClass('no-display');}, 400);
      $('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').addClass('no-display');}, 400);
    }
  }
);
window.deck.addSetupBuild('testing-end-to-end-diagram', 
  {
    forwards: function () {
      $('#testing-end-to-end-diagram .interaction').addClass('fadeable');
      $('#testing-end-to-end-diagram .interaction').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .interaction').removeClass('hidden');}, 50);
      $('#testing-end-to-end-diagram .mask').addClass('fadeable');
      $('#testing-end-to-end-diagram .mask').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .mask').removeClass('hidden');}, 50);
      $('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').addClass('fadeable');
      $('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').removeClass('hidden');}, 50);
      $('#testing-end-to-end-diagram .system-size').addClass('fadeable');
      $('#testing-end-to-end-diagram .system-size').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .system-size').addClass('no-display');}, 400);
      $('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').addClass('fadeable');
      $('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').addClass('no-display');}, 400);
    },
    backwards: function () {
      $('#testing-end-to-end-diagram .interaction').addClass('fadeable');
      $('#testing-end-to-end-diagram .interaction').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .interaction').addClass('no-display');}, 400);
      $('#testing-end-to-end-diagram .mask').addClass('fadeable');
      $('#testing-end-to-end-diagram .mask').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .mask').addClass('no-display');}, 400);
      $('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').addClass('fadeable');
      $('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-diagram #testing-end-to-end-small-boundary-end-to-end-boundary-small').addClass('no-display');}, 400);
      $('#testing-end-to-end-diagram .system-size').addClass('fadeable');
      $('#testing-end-to-end-diagram .system-size').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram .system-size').removeClass('hidden');}, 50);
      $('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').addClass('fadeable');
      $('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-diagram #testing-end-to-end-end-to-end-boundary').removeClass('hidden');}, 50);
    }
  }
);



// ---- for slide testing-end-to-end-tips----------------------------------------
window.deck.addBuild('testing-end-to-end-tips', 
  {
    forwards: function () {
      $('#testing-end-to-end-tips .tip-1-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .intro-text').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .intro-text').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-1').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-end-to-end-tips .tip-1-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .intro-text').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .intro-text').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-1').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-end-to-end-tips', 
  {
    forwards: function () {
      $('#testing-end-to-end-tips .tip-1').addClass('charred');
      $('#testing-end-to-end-tips .tip-1-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-2').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-2-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2-context').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-end-to-end-tips .tip-1').removeClass('charred');
      $('#testing-end-to-end-tips .tip-1-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-2').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-2-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2-context').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-end-to-end-tips', 
  {
    forwards: function () {
      $('#testing-end-to-end-tips .tip-2').addClass('charred');
      $('#testing-end-to-end-tips .tip-2-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-3').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-3-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3-context').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-end-to-end-tips .tip-2').removeClass('charred');
      $('#testing-end-to-end-tips .tip-2-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-3').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-3-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3-context').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-end-to-end-tips', 
  {
    forwards: function () {
      $('#testing-end-to-end-tips .tip-3').addClass('charred');
      $('#testing-end-to-end-tips .tip-3-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-4').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-4-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4-context').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-end-to-end-tips .tip-3').removeClass('charred');
      $('#testing-end-to-end-tips .tip-3-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-4').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-4-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4-context').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-end-to-end-tips', 
  {
    forwards: function () {
      $('#testing-end-to-end-tips .tip-4').addClass('charred');
      $('#testing-end-to-end-tips .tip-4-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-5').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-5-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5-context').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-end-to-end-tips .tip-4').removeClass('charred');
      $('#testing-end-to-end-tips .tip-4-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-5').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-5-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5-context').addClass('no-display');}, 400);
    }
  }
);
window.deck.addBuild('testing-end-to-end-tips', 
  {
    forwards: function () {
      $('#testing-end-to-end-tips .tip-1').removeClass('charred');
      $('#testing-end-to-end-tips .tip-2').removeClass('charred');
      $('#testing-end-to-end-tips .tip-3').removeClass('charred');
      $('#testing-end-to-end-tips .tip-4').removeClass('charred');
      $('#testing-end-to-end-tips .tip-5-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .closing-text').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .closing-text').removeClass('hidden');}, 50);
    },

    backwards: function () {
      $('#testing-end-to-end-tips .tip-1').addClass('charred');
      $('#testing-end-to-end-tips .tip-2').addClass('charred');
      $('#testing-end-to-end-tips .tip-3').addClass('charred');
      $('#testing-end-to-end-tips .tip-4').addClass('charred');
      $('#testing-end-to-end-tips .tip-5-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .closing-text').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .closing-text').addClass('no-display');}, 400);
    }
  }
);
window.deck.addSetupBuild('testing-end-to-end-tips', 
  {
    forwards: function () {
      $('#testing-end-to-end-tips .tip-1, #testing-end-to-end-tips .tip-1 p, #testing-end-to-end-tips .tip-1 ul, #testing-end-to-end-tips .tip-1 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-1').addClass('charred');
      $('#testing-end-to-end-tips .tip-2, #testing-end-to-end-tips .tip-2 p, #testing-end-to-end-tips .tip-2 ul, #testing-end-to-end-tips .tip-2 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-2').addClass('charred');
      $('#testing-end-to-end-tips .tip-3, #testing-end-to-end-tips .tip-3 p, #testing-end-to-end-tips .tip-3 ul, #testing-end-to-end-tips .tip-3 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-3').addClass('charred');
      $('#testing-end-to-end-tips .tip-4, #testing-end-to-end-tips .tip-4 p, #testing-end-to-end-tips .tip-4 ul, #testing-end-to-end-tips .tip-4 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-4').addClass('charred');
      $('#testing-end-to-end-tips .tip-5-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-5-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .closing-text').addClass('fadeable');
      $('#testing-end-to-end-tips .closing-text').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .closing-text').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-4, #testing-end-to-end-tips .tip-4 p, #testing-end-to-end-tips .tip-4 ul, #testing-end-to-end-tips .tip-4 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-4').removeClass('charred');
      $('#testing-end-to-end-tips .tip-4-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-4-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-5').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-5').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-5-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-5-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-3, #testing-end-to-end-tips .tip-3 p, #testing-end-to-end-tips .tip-3 ul, #testing-end-to-end-tips .tip-3 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-3').removeClass('charred');
      $('#testing-end-to-end-tips .tip-3-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-3-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-4').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-4').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-4-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-4-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-2, #testing-end-to-end-tips .tip-2 p, #testing-end-to-end-tips .tip-2 ul, #testing-end-to-end-tips .tip-2 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-2').removeClass('charred');
      $('#testing-end-to-end-tips .tip-2-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-2-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-3').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-3').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-3-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-3-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-1, #testing-end-to-end-tips .tip-1 p, #testing-end-to-end-tips .tip-1 ul, #testing-end-to-end-tips .tip-1 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-1').removeClass('charred');
      $('#testing-end-to-end-tips .tip-1-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-1-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-2').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-2').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-2-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-2-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-1-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-1-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .intro-text').addClass('fadeable');
      $('#testing-end-to-end-tips .intro-text').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .intro-text').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-1').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-1').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1').addClass('no-display');}, 400);
    },
    backwards: function () {
      $('#testing-end-to-end-tips .tip-1-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-1-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .intro-text').addClass('fadeable');
      $('#testing-end-to-end-tips .intro-text').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .intro-text').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-1').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-1').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-1, #testing-end-to-end-tips .tip-1 p, #testing-end-to-end-tips .tip-1 ul, #testing-end-to-end-tips .tip-1 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-1').addClass('charred');
      $('#testing-end-to-end-tips .tip-1-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-1-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-1-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-2').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-2').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-2-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-2-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-2, #testing-end-to-end-tips .tip-2 p, #testing-end-to-end-tips .tip-2 ul, #testing-end-to-end-tips .tip-2 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-2').addClass('charred');
      $('#testing-end-to-end-tips .tip-2-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-2-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-2-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-3').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-3').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-3-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-3-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-3, #testing-end-to-end-tips .tip-3 p, #testing-end-to-end-tips .tip-3 ul, #testing-end-to-end-tips .tip-3 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-3').addClass('charred');
      $('#testing-end-to-end-tips .tip-3-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-3-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-3-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-4').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-4').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-4-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-4-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-4, #testing-end-to-end-tips .tip-4 p, #testing-end-to-end-tips .tip-4 ul, #testing-end-to-end-tips .tip-4 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-4').addClass('charred');
      $('#testing-end-to-end-tips .tip-4-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-4-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-4-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .tip-5').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-5').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-5-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-5-context').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5-context').removeClass('hidden');}, 50);
      $('#testing-end-to-end-tips .tip-1, #testing-end-to-end-tips .tip-1 p, #testing-end-to-end-tips .tip-1 ul, #testing-end-to-end-tips .tip-1 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-1').removeClass('charred');
      $('#testing-end-to-end-tips .tip-2, #testing-end-to-end-tips .tip-2 p, #testing-end-to-end-tips .tip-2 ul, #testing-end-to-end-tips .tip-2 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-2').removeClass('charred');
      $('#testing-end-to-end-tips .tip-3, #testing-end-to-end-tips .tip-3 p, #testing-end-to-end-tips .tip-3 ul, #testing-end-to-end-tips .tip-3 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-3').removeClass('charred');
      $('#testing-end-to-end-tips .tip-4, #testing-end-to-end-tips .tip-4 p, #testing-end-to-end-tips .tip-4 ul, #testing-end-to-end-tips .tip-4 pre').addClass('fadeable');      
$('#testing-end-to-end-tips .tip-4').removeClass('charred');
      $('#testing-end-to-end-tips .tip-5-context').addClass('fadeable');
      $('#testing-end-to-end-tips .tip-5-context').addClass('hidden');
      window.setTimeout(function () {$('#testing-end-to-end-tips .tip-5-context').addClass('no-display');}, 400);
      $('#testing-end-to-end-tips .closing-text').addClass('fadeable');
      $('#testing-end-to-end-tips .closing-text').removeClass('no-display');
      window.setTimeout(function () {$('#testing-end-to-end-tips .closing-text').removeClass('hidden');}, 50);
    }
  }
);

};
initialize_deck();
window.deck.load();