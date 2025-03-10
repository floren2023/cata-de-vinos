import { del } from '@vercel/blob';

export async function deleteImage(url: string) {
  try {
    // Delete the image from Vercel Blob storage
    await del(url);
    
    return {
      success: true,
      message: 'Image deleted successfully'
    };
  } catch (error) {
    console.error('Error deleting image:', error);
    
    return {
      success: false,
      message: 'Failed to delete image',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}