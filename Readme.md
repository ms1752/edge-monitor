
# ipm package: edge-monitor

## Overview

Monitor the health and manage the edge gateways leveraging the ClearBlade [edge-manager-adapter](https://github.com/ClearBlade/edge-manager-adapter).

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

1. Modify the library called edgmon_constants to include the platform url you are using
2. Save and Test the service called edgmonSetup to create the edgmon_user@clearblade.com and edgmon_editor@clearblade.com example users, as well as the needed adapter device.
3. Update the edge-manager-adapter-amd64 settings, specifically the Start-up Command, with your system key and system secret (and if you changed the password in edgmonSetup for the edge-manager-adapter you will update that here as well).

## Usage

In order to take advantage of this systems features, you will need to have a gateway, cloud VM, or local VM to run a ClearBlade Edge on. The provided portal will show you monitoring details of the edge, including logs, RAM usage, CPU usage, uptime, connections, and many more. Also, with the provided edge-manager adapter, you will be able to update the edge firmware or restart the edge directly from this portal.

Navigate to the Edges page of the console, and you will see an example Edge (Edge1) has already been created. To quickly get the edge up and running, just select the setup instructions, and follow them to install and start the edge on your gateway or VM.

Next, navigate to the Portals page, and select the Edge Monitor. Sign in with the edgmon_user@clearblade.com user (default password is clearblade, unless you changed this in the edgmonSetup service). Now select the flyout menu on the left, and pick Edge1 from the list. The portal should now populate with all the monitoring data from your edge.

To preform management tasks directly on this edge, look in the Edge Software Update section of the portal. Here you are able to specify a version and archiecture and update the edge to this specific version. After clicking update, it can take 30 seconds to a minute to fully update. Once completed, you will see an Edge updated successfully message. You can also restart your edge device from here by simply clicking the Restart button (note - currently for this feature to work, you will need to have started your edge with sudo).

### Code Services
- edgmonSetup
- edgmonUtil

### Code Libraries
- edgmon_constants
- edgmon_setup_assistant

### Portals
- Edge Monitor

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
