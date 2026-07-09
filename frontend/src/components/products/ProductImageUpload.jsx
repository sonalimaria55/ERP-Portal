import React from "react";
import {
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductImageUpload({
  formData,
  onChange,
}) {

  const handleFileChange = (event) => {

    const files = Array.from(
      event.target.files || []
    );

    const newImages = files.map((file) => ({

      file,

      preview: URL.createObjectURL(file),

      name: file.name,

    }));

    onChange(
      "images",
      [
        ...formData.images,
        ...newImages,
      ]
    );

  };



  const handleRemoveImage = (index) => {

    const updatedImages =
      [...formData.images];

    const image =
      updatedImages[index];

    if(image.preview){

      URL.revokeObjectURL(
        image.preview
      );

    }

    updatedImages.splice(index,1);

    onChange(
      "images",
      updatedImages
    );

  };



  return (

    <Box>

      <Button
        component="label"
        variant="contained"
        startIcon={<UploadFileIcon />}
      >

        Upload Images

        <input
          hidden
          multiple
          accept="image/*"
          type="file"
          onChange={handleFileChange}
        />

      </Button>


      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mt:2,
          mb:2,
        }}
      >
        Supported formats:
        JPG, JPEG, PNG, WEBP
      </Typography>



      <Grid container spacing={2}>

        {formData.images.map(
          (image,index)=>{

            const imageUrl =
              image.preview || image.url;

            const imageName =
              image.name ||
              image.publicId ||
              "Image";

            return(

              <Grid
                key={index}
                size={{
                  xs:12,
                  sm:6,
                  md:3,
                }}
              >

                <Card>

                  <CardMedia
                    component="img"
                    height="180"
                    image={imageUrl}
                    alt={imageName}
                  />

                  <CardActions
                    sx={{
                      justifyContent:"space-between",
                      px:2,
                    }}
                  >

                    <Typography
                      variant="caption"
                      noWrap
                      sx={{
                        maxWidth:120,
                      }}
                    >
                      {imageName}
                    </Typography>

                    <Button
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={()=>
                        handleRemoveImage(index)
                      }
                    >
                      Remove
                    </Button>

                  </CardActions>

                </Card>

              </Grid>

            );

          }
        )}

      </Grid>

    </Box>

  );

}