// 'use strict';
// var React = require('react-native');
// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   DrawerLayoutAndroid,
//   TouchableHighlight,
//   Navigator
// } = React;

// var DrawerTest = React.createClass({
//   openDrawer:function() {
//     this.refs['DRAWER'].openDrawer()
//   },
//   render: function() {
//     var navigationView = (
//         <View style={{flex: 1, backgroundColor: '#fff'}}>
//           <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
//         </View>
//     );
//     return (
//           <DrawerLayoutAndroid
//               drawerWidth={300}
//               ref={'DRAWER'}
//               drawerPosition={DrawerLayoutAndroid.positions.Left}
//               renderNavigationView={() => navigationView}>
//             <View style={{flex: 1, alignItems: 'center'}}>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
//               <TouchableHighlight onPress={this.openDrawer}>
//                 <Text>{'Open Drawer'}</Text>
//               </TouchableHighlight>
//             </View>
//           </DrawerLayoutAndroid>
//     );
//   }
// });

// module.exports = DrawerTest;