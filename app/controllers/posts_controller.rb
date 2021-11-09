class PostsController < ApplicationController
    def index
        @posts = Post.all

        render json: @posts
    end
    
    def show
        @post = Post.find_by(id: params[:id])
        if @post
            render json: @post
        else
            render json: {error: "post not found"}, status: 404
        end
    end

    def create 
        @post = Post.new(post_params)
        if @post.save
            render json: @post, status: 201
        else
            render json: {error: "Product not created"}, status: 400
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post
            @post.update(update_params)
            render json: @post, status: :ok
        else
            render json: {error: "Nothing changed"}, status: 400
        end  
    end

    def destroy
        @post = Post.find(params[:id])
        if @post
            @post.destroy
            render json: {message: "Product deleted"}, status: 200
        else
            render json: {error: "Product not found"}, status: 404
        end
    end



    private 

    def post_params
        params.require(:image).permit(:caption, :user_id)
    end
    def update_params
        params.permit(:caption, :image)
    end
end
