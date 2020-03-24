import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer H7y_V-ezOxE9Ds127mxaa9Jvkl6o8OFcuitAV1-e_mmsdJkYjsaOttAAEbxciUc2FPh_E5TYX-4XFx5UiOuFbLVVMnhsE-MRdxE53KkXC3AAPntbD4jW4eOfyt94XnYx'
    }
});

