import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
	container: {
		flex: 1,
	},
	display: {
		flex: 2, 
		backgroundColor: '#1C1C1C'
	}
	buttons: {
		flex: 8, 
		backgroundColor: '#505050'
	},
        Btn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0.45,
		borderColor: '#FF9500'
	},
	BtnText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#D4D4D2'
    	}
});
export default Style;