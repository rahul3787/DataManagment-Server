import React, { useState } from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  List,
  makeStyles,
  Paper,
} from "@material-ui/core";

import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { SmallSelect } from "../../../widgets/CustomSelect";
import { CommentEvets } from "./CommentEvents";
import { CommentTextField } from "./CommentTextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  activetyHeaderPadding: {
    padding: "10px",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const comments = [
  {
    comment_id: "uuid",
    type: "comment",
    content: "Hello World",
    created_by: {
      person_id: 1,
      first_name: "Gaurav",
      last_name: "Kalyan",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
    created_on: "2020-08-14T16:14",
    modified_on: "2020-08-14T16:14",
    user_tagged: [
      {
        person_id: 2,
        first_name: "Pritish",
        last_name: "Sharma",
        avatar:
          "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      },
      {
        person_id: 3,
        first_name: "Ravi",
        last_name: "Ranjan",
      },
    ],
    replies: [
      {
        comment_id: 1,
        content:"xyz",
        type: "comment",
        created_by: {
          person_id: 1,
          first_name: "Gaurav",
          last_name: "Kalyan",
          avatar:
            "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
        },
        created_on: "2020-08-14T16:14",
        modified_on: "2020-08-14T16:14",
        user_tagged: [
          {
            person_id: 2,
            first_name: "Pritish",
            last_name: "Sharma",
            avatar:
              "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
          },
          {
            person_id: 3,
            first_name: "Ravi",
            last_name: "Ranjan",
          },
        ],
        replies: [
          {
            comment_id: 1,
            content:"abcd",
            type: "comment",
            created_by: {
              person_id: 1,
              first_name: "Gaurav",
              last_name: "Kalyan",
              avatar:
                "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
            },
            created_on: "2020-08-14T16:14",
            modified_on: "2020-08-14T16:14",
            user_tagged: [
              {
                person_id: 2,
                first_name: "Pritish",
                last_name: "Sharma",
                avatar:
                  "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
              },
              {
                person_id: 3,
                first_name: "Ravi",
                last_name: "Ranjan",
              },
            ],
            replies: [],
          },
        ],
      },
    ],
  },
  {
    type: "Activity",
    created_on: "2020-08-14T16:14",
    content: "Hello World",
    created_by: {
      person_id: 2,
      first_name: "Pritish",
      last_name: "Sharma",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
  },
];

export const AddComment = (props) => {
  const classes = useStyles();
  const [comments, AddComments] = useState([
    {
      eventType: "comment",
      comenet: "abhishek hase started the work ",
      user: "abhishek hase started the work",
      date: "aug 2 2020",
    },
    {
      eventType: "activity",
      activity: "abhishek hase started the work ",
      date: "aug 2 2020",
    },
  ]);

  const onSave = (value) => {
    let newComment = [...comments];
    newComment.push({
      comenet: value,
      user: "Abhishek Has updated resently",
    });
    AddComments(newComment);
  };

  const onDelete = (index) => {
    let newComment = [...comments];
    newComment.splice(index, 1);
    AddComments(newComment);
  };

  return (
    <React.Fragment>
    
        <h5 className={classes.activetyHeaderPadding}>Activity</h5>
        <CommentTextField data="" onSave={onSave} />
        <List className={classes.root} dense>
          {comments.map((row, index) => {
            return row.eventType === "activity" ? (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar className={classes.small}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={row.activity} secondary={row.date} />
              </ListItem>
            ) : (
              <ListItem key={index}>
                <CommentEvets
                  data={row.comenet}
                  user={row.user}
                  onDeletHandle={onDelete}
                />
              </ListItem>
            );
          })}
        </List>
     
    </React.Fragment>
  );
};
