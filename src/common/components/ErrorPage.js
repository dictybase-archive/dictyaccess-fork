import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import sadDicty from "common/assets/sad-dicty.png"

const styles = (theme) => ({
  error400: {
    backgroundColor: "#eff8fb",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
    borderRadius: 5,
  },
  error500: {
    backgroundColor: "#a63232",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
    borderRadius: 5,
    color: "#fff",
  },
  backButton: {
    width: "25%",
    padding: "20px",
    textTransform: "none",
    backgroundColor: "#15317e",
  },
  addPageButton: {
    width: "25%",
    marginTop: "25px",
    padding: "25px",
    textTransform: "none",
    backgroundColor: "#FF6347",
    "&:hover": {
      backgroundColor: "#cc381e",
    },
  },
  mainGrid: {
    marginTop: "40px",
  },
  paragraph: {
    padding: "10px",
  },
  routerLink: {
    color: "#428bca",
    textDecoration: "none",
  },
})

/**
 * General error handling page.
 * It displays different messages based on HTTP status code.
 */

export const ErrorPage = (props) => {
  const { birdseye, classes } = props

  let errorStatus = 0
  let errorMsg

  if (birdseye.error) {
    errorStatus = birdseye.error.status
    errorMsg = birdseye.error.title
  }

  if (errorStatus >= 500) {
    return (
      <Grid container className={classes.mainGrid} justify="center">
        <Grid item xs={10} md={8}>
          <div className={classes.error500}>
            <h3>Sorry! There was a server error.</h3>
            <p>
              If the problem persists, please email us at{" "}
              <a href="mailto:dictybase@northwestern.edu">
                dictybase@northwestern.edu
              </a>
            </p>
            <Link className={classes.routerLink} to="/">
              <Button
                className={classes.backButton}
                size="small"
                variant="contained"
                color="default">
                Back to homepage
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    )
  }

  if (errorStatus === 404) {
    return (
      <Grid container className={classes.mainGrid} justify="center">
        <Grid item xs={10} md={8}>
          <div className={classes.error400}>
            <img src={sadDicty} alt="Sad Dicty -- Gene Not Found" />
            <h3>Gene Not Found</h3>
            <ul>
              <li>This is probably an invalid ID. Try a different one.</li>
              <li>You might be coming here from an outdated link.</li>
              <li>
                If problems persist, email us at{" "}
                <a href="mailto:dictybase@northwestern.edu">
                  dictybase@northwestern.edu
                </a>
                .
              </li>
            </ul>
            <Link className={classes.routerLink} to="/">
              <Button
                className={classes.backButton}
                size="small"
                variant="contained"
                color="primary">
                Back to homepage
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container className={classes.mainGrid} justify="center">
      <Grid item xs={10} md={8}>
        <div className={classes.error400}>
          <img src={sadDicty} alt="Sad Dicty -- HTTP Error" />
          <h1>
            <FontAwesomeIcon icon="exclamation-circle" /> {errorStatus} Error
          </h1>
          <h3>{errorMsg}</h3>
          <p>
            If the problem persists, please email us at{" "}
            <a href="mailto:dictybase@northwestern.edu">
              dictybase@northwestern.edu
            </a>
            .
          </p>
          <Link className={classes.routerLink} to="/">
            <Button
              className={classes.backButton}
              size="small"
              variant="contained"
              color="primary">
              Back to Homepage
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default withStyles(styles)(connect(mapStateToProps)(ErrorPage))
