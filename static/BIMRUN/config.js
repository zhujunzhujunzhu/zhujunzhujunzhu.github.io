(function f(e) {
  e.BIMRUN || (e.BIMRUN = {})

  var httpProtocol = 'http://'
  var https = 'https://tech.suitbim.com/bim'
  // var httpProtocol = 'https://'
  var occHttpProtocol = 'ws://'
  // var baseDomain = '192.168.1.76'
  var baseDomain = '3d.bimrun.com'
  var port = 8280
  var occPort = 8281
  var resUrl = https + '/resource'
  var baseUrl = https + '/webgl'
  // var resUrl = httpProtocol + baseDomain + ':' + port + '/resource'
  // var baseUrl = httpProtocol + baseDomain + ':' + port + '/webgl'
  var occBaseUrl = occHttpProtocol + baseDomain + ':' + occPort + '/occlusion'

  e.BIMRUN.Urls = {
    baseUrl: baseUrl,
    // baseDomain: 'bimrun3d.justonetech.com', // 添加domain
    // baseDomain: baseDomain,
    // baseDomain:'localhost:8080',//添加domain
    ocService: occBaseUrl,
    getActions: occBaseUrl + '/query/getActionsByCriteria',
    getActionsHttp: httpProtocol + baseDomain + ':' + occPort + '/occlusion/query/getActionsByCriteria', // 'http://www.justonetech.com:8281/occlusion/query/getActionsByCriteria',
    getProjects: baseUrl + '/webGLInterface/getProjects',
    getOGLs: baseUrl + '/webGLInterface/getOGLs',
    getAttributes: baseUrl + '/getAttributes',
    getManifestBySceneId: baseUrl + '/getManifest',
    getManifestByCriteria: baseUrl + '/webGLInterface/getManifestByCriteria',
    getManifestByProject: baseUrl + '/webGLInterface/getImproveManifest',
    getManifestByMilestoneAndSize: baseUrl + '/webGLInterface/getManifestByMilestoneAndSize',
    getManifestByModelAndBox: baseUrl + '/webGLInterface/getManifestByModelAndBox',
    getManifest: baseUrl + '/manifest',
    getModelInfo: baseUrl + '/getSimpleModelInfo',
    getViewPorts: baseUrl + '/getViewports',
    saveViewPort: baseUrl + '/webGLInterface/saveViewPort',
    deleteViewPort: baseUrl + '/webGLInterface/deleteViewPort',
    getTexture: function(textureName) {
      return resUrl + textureName
    },
    getModelTypeOGL: function(projectId, geometryHash, lod) {
      // return resUrl + "/resources/webGL/" + projectId + "/modelType_" + modelTypeId + "_" + (lod + 1) + ".ogl";
      return resUrl + '/' + projectId + '/geometry/ogl/' + geometryHash + '.ogl'
    },
    getOglPack: resUrl + '/' + 'pack'
  }
})(window)
