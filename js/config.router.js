'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG) {
          var layout = "tpl/app.html";
          if(window.location.href.indexOf("material") > 0){
            layout = "tpl/blocks/material.layout.html";
            $urlRouterProvider
              .otherwise('/app/dashboard-v3');
          }else{
            $urlRouterProvider
              .otherwise('/app/dashboard-v1');
          }
          
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: layout
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  cache:false,
                  templateUrl: 'tpl/app_dashboard_v1.html',
                  controller:"AppCtrl",
                  resolve: load(['js/controllers/chart.js'])
              })

              // Material Start

              .state('app.mat', {
                template: '<div ui-view class="fade-in"></div>'
              })
              .state('app.mat.stores', {
                  url: '/stores',
                  templateUrl: 'tpl/app_dashboard_v1.html',
                  resolve: load(['js/controllers/chart.js'])
              })
              .state('app.mat.groups', {
                  url: '/dashboard-v2',
                  templateUrl: 'tpl/app_dashboard_v2.html',
                  resolve: load(['js/controllers/chart.js'])
              })
              .state('app.mat.uom', {
                  url: '/dashboard-v3',
                  templateUrl: 'tpl/app_dashboard_v3.html',
                  resolve: load(['js/controllers/chart.js'])
              })
              .state('app.mat.cost-centre', {
                  url: '/buttons',
                  templateUrl: 'tpl/ui_buttons.html'
              })
              .state('app.mat.item-master', {
                  url: '/icons',
                  templateUrl: 'tpl/ui_icons.html'
              })
              .state('app.mat.supplier-master', {
                  url: '/grid',
                  templateUrl: 'tpl/ui_grid.html'
              })
              .state('app.mat.taxcode', {
                  url: '/widgets',
                  templateUrl: 'tpl/ui_widgets.html'
              })          
              .state('app.mat.tax-structure', {
                  url: '/bootstrap',
                  templateUrl: 'tpl/ui_bootstrap.html'
              })
              .state('app.mat.template-master', {
                  url: '/sortable',
                  templateUrl: 'tpl/ui_sortable.html'
              })
              .state('app.mat.store-parameters', {
                  url: '/scroll',
                  templateUrl: 'tpl/ui_scroll.html',
                  resolve: load('js/controllers/scroll.js')
              })
              .state('app.mat.subcost-centre', {
                  url: '/portlet',
                  templateUrl: 'tpl/ui_portlet.html'
              })
              .state('app.mat.standing-po', {
                  url: '/timeline',
                  templateUrl: 'tpl/ui_timeline.html'
              })
              .state('app.mat.access-rights', {
                  url: '/tree',
                  templateUrl: 'tpl/ui_tree.html',
                  resolve: load(['angularBootstrapNavTree', 'js/controllers/tree.js'])
              })
              .state('app.mat.sub-groups', {
                  url: '/toaster',
                  templateUrl: 'tpl/ui_toaster.html',
                  resolve: load(['toaster', 'js/controllers/toaster.js'])
              })

              // operations Start

              .state('app.oper', {
                template: '<div ui-view class="fade-in"></div>'
              })

              .state('app.oper.item-template', {
                  url: '/item-template',
                  templateUrl: 'tpl/ui_jvectormap.html',
                  resolve: load('js/controllers/vectormap.js')
              })
              .state('app.oper.indents', {
                  url: '/indents',
                  templateUrl: 'tpl/materials/indent.html ',
                  /*resolve: load(['js/app/map/load-google-maps.js', 'js/app/map/ui-map.js', 'js/app/map/map.js'], function(){ return loadGoogleMaps(); })*/
              })
               .state('app.oper.indentsview', {
                  url: '/indentsview',
                  templateUrl: 'tpl/materials/indentView.html ',
                  
              })
              .state('app.oper.dept-requist', { 
                  url: '/department',
                  templateUrl: 'tpl/ui_chart.html',
                  resolve: load('js/controllers/chart.js')
              })
              .state('app.oper.purchase-orderview', {
                  url: '/purchase-orderview',
                  templateUrl: 'tpl/materials/purchaseOrderView.html'
              })
              .state('app.oper.purchase-orderAdd', {
                  url: '/purchase-orderAdd',
                  templateUrl: 'tpl/materials/purchaseOrderAdd.html',
              })
              .state('app.oper.receiptsView', {
                  url: '/receiptsView',
                  templateUrl: 'tpl/materials/receiptView.html',
              })
               .state('app.oper.receiptsAdd', {
                  url: '/receiptsAdd',
                  templateUrl: 'tpl/materials/receiptAdd.html',
              })
              .state('app.oper.receipt-returns', {
                  url: '/receipt-returns',
                  templateUrl: 'tpl/materials/receiptReturns.html',
              })
              .state('app.oper.store-issues', {
                  url: '/store-issues',
                  templateUrl: 'tpl/table_footable.html'
              })
              .state('app.oper.issues', {
                  url: '/issues',
                  templateUrl: 'tpl/operation/issue.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.addissue', {
                  url: '/add-issues',
                  templateUrl: 'tpl/operation/add_issue.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.issue-return', {
                  url: '/issue-return',
                  templateUrl: 'tpl/operation/issue_return.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.addissue-return', {
                  url: '/issue-return',
                  templateUrl: 'tpl/operation/add_issue_return.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.adjustment', {
                  url: '/adjustment',
                  templateUrl: 'tpl/operation/adjustment.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.add-adjustment', {
                  url: '/add-adjustment',
                  templateUrl: 'tpl/operation/adjustment_add.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.physical-entry', {
                  url: '/physical-entity',
                  templateUrl: 'tpl/operation/physical_stock.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.physical-entry-add', {
                  url: '/add-physical-entity',
                  templateUrl: 'tpl/operation/physical_stock_add.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.phy-entry-fifo', {
                  url: '/physical-entity',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: load('js/controllers/form.js')
              })
              .state('app.oper.month-end-closing', {
                  url: '/month-end-closing',
                  templateUrl: 'tpl/operation/month_end.html',
                  controller: 'IssueCtrl',
                  resolve: load(['smart-table','ui.bootstrap','toaster','ngBootbox','js/controllers/operations/issue.js'])
              })
              .state('app.oper.purchase-invoice', {
                  url: '/purchase-invoice',
                  templateUrl: 'tpl/form_elements.html'
              })
              .state('app.oper.close-indents', {
                  url: '/clode-indents',
                  templateUrl: 'tpl/form_validation.html'
              })
              .state('app.oper.dir-receipt', {
                  url: '/receipts',
                  templateUrl: 'tpl/form_wizard.html'
              })
              .state('app.oper.supplier-merge', {
                  url: '/supplier-merge',
                  templateUrl: 'tpl/form_fileupload.html',
                  resolve: load(['angularFileUpload','js/controllers/file-upload.js'])
              });

          function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                  function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        if(JQ_CONFIG[src]){
                          return $ocLazyLoad.load(JQ_CONFIG[src]);
                        }
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            name = module.name;
                          }else{
                            name = src;
                          }
                        });
                        return $ocLazyLoad.load(name);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }
      }
    ]
  );
