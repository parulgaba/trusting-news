import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import NewsModal from "./NewsModal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: "0 2px 2px 2px",
    marginLeft: `${10}em`,
    marginRight: `${10}em`
  },
  bullet: {
    display: "inline-block",
    margin: "2px 2px 2px 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    position: "absolute",
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit
  }
});

class NewsItem extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, article } = this.props;
    const { open } = this.state;
    const publishedDate = new Date(article.published_date);

    return (
      <div>
        <div onClick={this.handleOpen}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {article.byline ? article.byline : "The NYT"}
              </Typography>
              <Typography variant="h5" component="h2">
                {article.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {publishedDate.toLocaleString()}
              </Typography>
              <Typography component="p">
                {article.abstract
                  ? article.abstract
                  : "Visit news website for more"}
              </Typography>
            </CardContent>
            <CardActions />
          </Card>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <NewsModal article={article} />
          </div>
        </Modal>
      </div>
    );
  }
}

NewsItem.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  article: PropTypes.object.isRequired // eslint-disable-line
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(NewsItem);
