import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: COLORS.white,
        width: '100%'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        width: '100%'
    },
    loginContainer: {
        width: '100%'
    },
    loginImageTop: {
        width: 100,
        height: 100
    },
    textContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black

    },
    logoConatiner: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 185,
        height: 138,
        marginBottom: 15
    },
    inputTextContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
});
