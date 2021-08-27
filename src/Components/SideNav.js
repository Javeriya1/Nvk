import { ListGroup } from "react-bootstrap"
const SideNav = () => {
    return (
        <ListGroup style={{ paddingTop:'150px',textAlign:'center',width:'80px'}} variant="flush">
            <ListGroup.Item ><i className='fad fa-tree-palm'></i></ListGroup.Item>
            <ListGroup.Item><i class="far fa-user"></i></ListGroup.Item>
            <ListGroup.Item><i class="fas fa-cart-plus"></i></ListGroup.Item>
            <ListGroup.Item><i className='fas fa-tools'></i></ListGroup.Item>
        </ListGroup>
    )
}
export default SideNav