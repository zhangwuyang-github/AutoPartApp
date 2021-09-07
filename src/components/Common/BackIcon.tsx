import React, {Component} from 'react';
import {Dimensions, Image, Platform, Pressable, StyleSheet} from 'react-native';
import Navigation from '../../services/navigation';

interface Props {
  backIconStyle?: object;
  dark?: boolean;
  onBack?: () => void;
}

class BackIcon extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Pressable
        style={this.props.backIconStyle || styles.backIconStyle}
        onPress={() => {
          if (this.props.onBack) {
            return this.props.onBack();
          }
          Navigation.goBack();
        }}>
        <Image
          style={styles.backIcon}
          source={
            this.props.dark
              ? require('@images/navigation/back_white.png')
              : require('@images/navigation/back.png')
          }
        />
      </Pressable>
    );
  }
}

const {width} = Dimensions.get('window');
const scale = width / 375;

const styles = StyleSheet.create({
  backIconStyle: {
    width: 44 * scale,
    height: 44 * scale,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Platform.OS === 'ios' ? 4 : -4,
  },
  backIcon: {
    width: 24 * scale,
    height: 24 * scale,
  },
});

const HeaderBackIcon = BackIcon;

const headerBack = () => <HeaderBackIcon />;
const headerBackWhite = () => <HeaderBackIcon dark />;

export default BackIcon;

export {headerBack, headerBackWhite, HeaderBackIcon};
