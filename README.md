# Rise-ShineServer


## Post

### Get all posts
GET https://riseshineserver.herokuapp.com/post

```
{
    "msg": "All posts found",
    "data": [
        {
            "comments": [
                "5e8947a50b512b58fcc4423e",
                "5e894245d81dc65777175ad4"
            ],
            "_id": "5e893a5e8a025c54c661d18c",
            "video_id": "j34jiewjklsdfs",
            "text": "It was fun",
            "date": "2020-04-05T01:54:38.889Z",
            "__v": 2
        },
        {
            "comments": [],
            "_id": "5e89538f1a64fe5b49299c26",
            "video_id": "38vidah93ejid",
            "text": "Fun video",
            "date": "2020-04-05T03:42:07.484Z",
            "__v": 0
        }
    ],
    "count": 2
}
```

### Create a post
POST https://riseshineserver.herokuapp.com/post

**Request Body Parameters**

Name | Data Type | Description
--- | ---- | ---
title | string | (Required) Title of the post
video_id | string | (Required) URL of the video
text | string | (Required) Detail about the post
category | string | (Optional) Category of the post
type | string | (Optional) Post Type
image_url | string | (Optional) URL of the image
resource_url | string | (Optional) URL of the resource


```
{
    "msg": "Post is created",
    "data": {
        "comments": [],
        "_id": "5e895ce8d4b04c5d82c45617",
        "title": "Sit Ups",
        "video_id": "9dfjrijdsiojd",
        "text": "Cool video",
        "category": "Morning",
        "type": "Work Out",
        "date": "2020-04-05T04:22:00.881Z",
        "__v": 0
    }
}
```

### Get post by Id
GET https://riseshineserver.herokuapp.com/post/:postId

```
{
    "msg": "Post found",
    "data": {
        "comments": [
            {
                "_id": "5e8947a50b512b58fcc4423e",
                "text": "it okay",
                "date": "2020-04-05T02:51:17.887Z",
                "__v": 0
            },
            {
                "_id": "5e894245d81dc65777175ad4",
                "text": "it good",
                "date": "2020-04-05T02:28:21.500Z",
                "__v": 0
            }
        ],
        "_id": "5e893a5e8a025c54c661d18c",
        "video_id": "j34jiewjklsdfs",
        "text": "It was fun",
        "date": "2020-04-05T01:54:38.889Z",
        "__v": 2
    }
}
```

### Remove a post
DELETE https://riseshineserver.herokuapp.com/post/:postId

## Comment

### Add comment to a post
POST https://riseshineserver.herokuapp.com/comment/:postId
Name | Data Type | Description
--- | ---- | ---
text | string | (Required) Comment about the post

```
{
    "msg": "Comment is added",
    "data": {
        "_id": "5e8947a50b512b58fcc4423e",
        "text": "it okay",
        "date": "2020-04-05T02:51:17.887Z",
        "__v": 0
    },
    "post": {
        "comments": [
            "5e8947a50b512b58fcc4423e",
            "5e894245d81dc65777175ad4"
        ],
        "_id": "5e893a5e8a025c54c661d18c",
        "video_id": "j34jiewjklsdfs",
        "text": "It was fun",
        "date": "2020-04-05T01:54:38.889Z",
        "__v": 2
    }
}
```