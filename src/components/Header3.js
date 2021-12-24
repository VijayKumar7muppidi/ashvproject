import './index.css'
const Header3 = () => {
    return <div className='header-container header-container-3'>
        <div className='column'>
            <p className='type-name'>Ramdev Hardware</p>
            <div className='row align-items'>
                <p className='type-item'>Ashv Gati Business Loan  |  Open  |  Recommendation  |  Bangalore  |</p>
                <p className='type-item-duration'>10 Days</p>
            </div>
        </div>
        
        <div className='row align-center margin-right-5'>
            <div className='row align-center'>
                <p className='user'>A</p>
                <p className='user user2'>B</p>
                <p className='user users'>5+</p>
            </div>
            <div className='box'>
                <p className='box-text'>Policy</p>
                <p className='box-text box-text-bordered'>Comments</p>
                <div className='row align-center dots'>
                    <div className='dot'/>
                    <div className='dot' />
                    <div className='dot'/>
                </div>
            </div>
        </div>
    </div>
}

export default Header3