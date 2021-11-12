class PostsController < ApplicationController
    def index
        @posts = Post.order("created_at DESC")

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
        @post.user_id = session[:user_id]  
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

    def user_posts
        @posts = Post.where("user_id = :user_id", { user_id: session[:user_id]})
        if @posts
            render json: @posts
        else
            render json: {error: "post not found"}, status: 404
        end
    end


    private 

    def post_params
        params.require(:image)
        params.permit(:image, :caption)
    end
    def update_params
        params.permit(:caption, :image)
    end
end
