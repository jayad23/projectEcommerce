import React, {useContext} from 'react'
import ProductsContext from '../../Context/ProductsContext'
import './Review.styles.css'
import Reviews from '../../Components/Review/Reviews'
import CommentForm from '../../Components/CommentForm/CommentForm'

const Review = () => {
    const { state } = useContext(ProductsContext)
    const {newComment} = state
    return (
        <div className='reviews-container'>
            {
                state?.ReviewData?.map(user =>
                    <Reviews
                        key = {user.id}
                        userName = {user.name}
                        prof = {user.profession}
                        date = {user.date}
                        rev = {user.review}
                        avatar = {user.avatar}
                    />

                )  
            
            }
            {
                newComment &&
                    <Reviews
                        key = {state.newComment.id}
                        userName = {state.newComment.name}
                        prof = {state.newComment.profession}
                        date = {state.newComment.date}
                        rev = {state.newComment.review}
                        avatar = {state.newComment.UserModal}
                    />
            }
            <CommentForm/>
        </div>
    )
}

export default Review
