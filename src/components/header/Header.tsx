import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Box sx={styles.bgContainer}>
            <Box sx={styles.menusContainer}>
                <Link to='/'>
                    <Button sx={styles.menus}>Pagination</Button>
                </Link>
                <Link to='/products'>
                    <Button sx={styles.menus}>Products</Button>
                </Link>
            </Box>
        </Box>
    )
}
export default Header


const styles = {
    bgContainer: {
        backgroundColor: '#061a65',
        color: '#ffffff',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4
    },
    menusContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menus: {
        textTransform: 'capitalize',
        color: '#ffff',
        fontSize: '20px',
    }
}