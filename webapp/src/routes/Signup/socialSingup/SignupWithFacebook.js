import React from 'react'
import PropTypes from 'prop-types'
import { FacebookProvider, Login } from 'react-facebook';
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  btnFacebook: {
    display: 'flex',
    backgroundColor: "#1778f2",
    color: "White",
    marginBottom: theme.spacing(2),
    width: "40%",
    margin: "auto",
    '@media only screen and (max-width: 900px)': {
      width: "100%",
    },
    textTransform: "none",
  },
  facebookIcon: {
    marginRight: 5
  }
}))

const SignupWithFacebook = ({ handlerSubmit }) => {
  const classes = useStyles()

  const responseFacebook = (response) => {
    handlerSubmit(true, response.profile.email, response.profile.name, response.profile.id)
  }

  const handleError = (error) => {
    handlerSubmit(false, "", "", "")
  }

  return (
    <>
      <FacebookProvider appId="641671940102186">
        <Login
          scope="email"
          onCompleted={responseFacebook}
          onError={handleError}
        >
          {({ handleClick, error, data }) => (
            <Button
              onClick={handleClick}
              className={classes.btnFacebook}
              startIcon={
                <SvgIcon className={classes.facebookIcon} shapeRendering="http://www.w3.org/2000/svg" viewBox="0 0 245 244">
                  <path d="M245,122.745584 C245,54.9550197 190.154932,1.13686838e-13 122.5,1.13686838e-13 C54.8450684,1.13686838e-13 0,54.9550197 0,122.745584 C0,184.011452 44.7964795,234.791684 103.359375,244 L103.359375,158.226729 L72.2558594,158.226729 L72.2558594,122.745584 L103.359375,122.745584 L103.359375,95.7031972 C103.359375,64.9400853 121.647764,47.9474936 149.629443,47.9474936 C163.031948,47.9474936 177.050781,50.3448682 177.050781,50.3448682 L177.050781,80.5517892 L161.603818,80.5517892 C146.386304,80.5517892 141.640625,90.0135078 141.640625,99.7204779 L141.640625,122.745584 L175.615234,122.745584 L170.184082,158.226729 L141.640625,158.226729 L141.640625,244 C200.203521,234.791684 245,184.011452 245,122.745584" id="Fill-1"></path>
                </SvgIcon>
              }
            >
              Sign up with Facebook
            </Button>
          )}
        </Login>
      </FacebookProvider>
    </>
  )
}

SignupWithFacebook.propTypes = {
  handlerSubmit: PropTypes.func,
}

SignupWithFacebook.defaultProps = {}

export default SignupWithFacebook
