function edgmonUtil(req, resp){
    ClearBlade.init({"request":req})
    var testUpdateEdgeReqParams ={
        path:"update_edge",
        edgeId:"demoMacOSEdge",
        version:"4.0-rc3",
        architecture:"darwin"
    };
    
    var testRestartEdgeReqParams ={
        path:"restart_edge",
        edgeId:"demoMacOSEdge"
    };
    
    //req.params = testUpdateEdgeReqParams;
    
    var topic = "edge/monitor/update/_edge/"+req.params.edgeId;
    var msg = ClearBlade.Messaging();
    msg.publish(topic, JSON.stringify(req.params));
    resp.success("request sent to the edge")
    
}