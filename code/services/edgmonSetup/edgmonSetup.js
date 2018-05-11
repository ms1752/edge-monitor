function edgmonSetup(req, resp){
    const DEFAULT_USERS = [{
        // User Credentials for the default Portal Viewer User
        email: "edgmon_user@clearblade.com",
        password: "clearblade", // recommended to change this to something unique
        roles: ["edgmon Portal Viewer", "edgmon Edge Monitor"]
    }, {
        // User Credentials for the default Portal Editor User
        email: "edgmon_editor@clearblade.com",
        password: "clearblade", // recommended to change this to something unique
        roles: ["edgmon Portal Editor", "edgmon Edge Monitor"]
    }];
    
    const DEFAULT_DEVICES = [{
        // Default device used for by the edge-manager-adapter
        device_name: "edge-manager-adapter",
        active_key: "clearblade", // recommended to change this to something unique (if changed, you will need to update the active key in the adapter config, see the README.md for full details)
        roles: ["edgmon Edge Manager Adapter"],
        type: "adapter"
    }];
    
    
    SetupAssistant(edgmon_platform_url, req, DEFAULT_USERS, DEFAULT_DEVICES, function (err, data) {
        if (err) {
            log("Failed to setup system: " + data);
            resp.error("failed");
        } else {
            resp.success('All Users, Devices, and Roles have been setup successfully for the webhook-adapter IPM package!');
        } 
    });
}
