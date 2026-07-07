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
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function ProductImageUpload({ formData, onChange }) {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);

    const imageFiles = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    onChange("images", [...formData.images, ...imageFiles]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formData.images];

    URL.revokeObjectURL(updatedImages[index].preview);

    updatedImages.splice(index, 1);

    onChange("images", updatedImages);
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
        sx={{ mt: 2, mb: 2 }}
      >
        Supported formats: JPG, JPEG, PNG, WEBP
      </Typography>

      <Grid container spacing={2}>
        {formData.images.map((image, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={image.preview}
                alt={image.name}
              />

              <CardActions
                sx={{
                  justifyContent: "space-between",
                  px: 2,
                }}
              >
                <Typography
                  variant="caption"
                  noWrap
                  sx={{ maxWidth: 120 }}
                >
                  {image.name}
                </Typography>

                <Button
                  color="error"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemoveImage(index)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}