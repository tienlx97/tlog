// Create a small helper function to loop over the themes and create CSS rule sets
// Use the helper in your styles
export const Vars = cb =>
  Object.keys(ThemesPkg).reduce((acc, name) => Object.assign(acc, {
    [`.theme-${name} &`]: cb(ThemesPkg[name]),
  }), {});

export const ThemesPkg = {
  light: {

    // 
    iconLogo: 'rgba(29,161,242,1.00)',
    iconColor: 'rgb(15, 20, 25)', // normal
    iconColorClicked: 'rgb(15, 20, 25)', // clicked
    
    textColor1: 'rgb(15, 20, 25)',
    textColor2: 'rgb(83, 100, 113)',
    textLinkColor: 'rgb(27, 149, 224)',

    circleButtonColorClicked: 'rgba(255, 255, 255, 0.2)',
    circleButtonColorHover: 'rgba(29,161,242,0.1)',

    borderColor: 'rgb(207, 217, 222)',

    themeColor: 'rgb(255, 255, 255)',

    blockColor: 'rgb(247, 249, 249)',

    postHoverWeb: 'rgba(0,0,0,0.03)',

    text: 'black',
    background: 'white',
    fdsFas: '200ms',
    fdsSoft: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
    secondaryIcon: '#65676b'
  },
  dark: {
    iconLogo: 'rgb(255, 255, 255)',
    iconColor: 'rgb(255, 255, 255)', // normal
    iconColorClicked: 'rgb(255, 255, 255)', // clicked

    textColor1: 'rgb(255, 255, 255)',
    textColor2: 'rgb(136, 153, 166)',
    textLinkColor: 'rgb(27, 149, 224)',

    circleButtonColorClicked: 'rgba(255, 255, 255, 0.2)',
    circleButtonColorHover: 'rgba(29,161,242,0.1)',

    borderColor: 'rgb(56, 68, 77)',

    themeColor: 'rgb(21, 32, 43)',

    blockColor: 'rgb(25, 39, 52)',

    postHoverWeb: 'rgba(255, 255, 255, 0.2)',
   
    fdsFas: '200ms',
    fdsSoft: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
    secondaryIcon: '#65676b'
  },
};