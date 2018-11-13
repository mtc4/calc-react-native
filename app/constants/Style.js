import { StyleSheet } from 'react-native';

const width = '92%';
var Style = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#000000'
	},
	container: {
		flex: 1,
		color: 'white'
	},
	column: {
		flex: 1, 
		flexDirection: 'row',
		padding: 0,
	},
	display: {
		flex: 4, 
		width,
		alignItems: 'flex-end',
		flexDirection: 'row-reverse'
	},
	displayText: {
		fontFamily: "System",
		fontWeight: "300",
		color: '#ffffff',
		fontSize: 90,
		marginRight: 20,
		marginBottom: 12
	},
	buttons: {
		flex: 6, 
		marginBottom: 80,
		width
	},
    Btn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#333333',
		borderRadius: 100,
		marginLeft: 6,
		marginRight: 6,
		width: 85,
		height: 85
	},
	BtnRight: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff9500',
		borderRadius: 100,
		marginLeft: 6,
		marginRight: 6,
		width: 85,
		height: 85
	},
	BtnTop: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0.45,
		backgroundColor: '#a6a6a6',
		borderRadius: 100,
		marginLeft: 6,
		marginRight: 6,
		height: 85
	},
	BtnZero: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0.45,
		backgroundColor: '#333333',
		borderRadius: 100,
		marginLeft: 6,
		marginRight: 6,
		height: 85
	},
	BtnTextWhite: {
		fontSize: 32,
		color: '#ffffff'
	},
	BtnTextBlack: {
		fontSize: 32,
		color: '#000000'
	}
});
export default Style;