import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import ListSubheader from "@material-ui/core/ListSubheader"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import Typography from "@material-ui/core/Typography"

import MiniCircos from "./MiniCircos"
import {
  chr1,
  chr2,
  chr3,
  chr4,
  chr5,
  chr6,
} from "features/BirdsEye/Circos/geneArrays"
import chromosomes from "common/data/circos/chromosomes.json"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "5px",
  },
  title: {
    color: theme.palette.primary,
  },
  headerBar: {
    backgroundColor: "#011f4b",
  },
  headerBarTitle: {
    color: "white",
    fontSize: 20,
  },
  titleBar: {
    backgroundColor: "rgba(1, 31, 75, 0.7)",
  },
  gridList: {
    width: "100%",
    height: 480,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  subhead: {
    color: "white",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
})

const SvgVerticalGrid = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} cols={2} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          style={{ height: "auto" }}
          className={classes.headerBar}>
          <ListSubheader className={classes.headerBarTitle} component="div">
            <Typography
              variant="headline"
              gutterBottom
              className={classes.subhead}>
              Other Chromosomes
            </Typography>
          </ListSubheader>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr1">
            <center>
              <MiniCircos data={chr1} chr={chromosomes.data[0]} name="chr1" />
              <GridListTileBar
                title="Chromosome 1"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr2">
            <center>
              <MiniCircos data={chr2} chr={chromosomes.data[1]} name="chr2" />
              <GridListTileBar
                title="Chromosome 2"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </center>
          </Link>
        </GridListTile>

        <GridListTile>
          <Link to="/birdseye/genemodels/chr3">
            <center>
              <MiniCircos data={chr3} chr={chromosomes.data[2]} name="chr3" />
              <GridListTileBar
                title="Chromosome 3"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr4">
            <center>
              <MiniCircos data={chr4} chr={chromosomes.data[3]} name="chr4" />
              <GridListTileBar
                title="Chromosome 4"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr5">
            <center>
              <MiniCircos data={chr5} chr={chromosomes.data[4]} name="chr5" />
              <GridListTileBar
                title="Chromosome 5"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr6">
            <center>
              <MiniCircos data={chr6} chr={chromosomes.data[5]} name="chr6" />
              <GridListTileBar
                title="Chromosome 6"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </center>
          </Link>
        </GridListTile>
      </GridList>
    </div>
  )
}

export default withStyles(styles)(SvgVerticalGrid)
