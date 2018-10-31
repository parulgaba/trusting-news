import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275,
    margin: "0 2px 2px 2px"
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
  }
};

function NewsModal(props) {
  const { article, classes } = props;
  const publishedDate = new Date(article.published_date);

  return (
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
          {article.snippet ? article.snippet : "Visit news website for more"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={article.short_url} target="_blank" rel="noopener noreferrer">
            Full Article
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

NewsModal.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  article: PropTypes.object.isRequired // eslint-disable-line
};

export default withStyles(styles)(NewsModal);
