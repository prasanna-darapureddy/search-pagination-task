import { Box, FormControl, InputBase, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material'
import { styles } from './ProductsStyles'
import React, { useEffect, useState } from 'react'
import { Search } from '@mui/icons-material'

export type Product = {
    id: number,
    title: string,
    thumbnail: string,
    brand: string,
    category: string,
    discription: string,
    discountPercentage: number,
    price: number,
    rating: number,
    stock: number,
}

interface IState {
    productsList: Product[],
    pageNum: number,
    userInput: string,
    isTrue: boolean,
    id: number,
    option: string,
}

function ProductsSearch() {
    const [productsList, setProductsList] = useState<IState['productsList']>([])
    const [filteredList, setFilteredList] = useState<IState['productsList']>([])
    const [searchValue, setSearchValue] = useState<IState['userInput']>('')
    const [id, setId] = useState<IState['id']>()
    const [option, setOption] = useState<IState['option']>('')

    const getProducts = async () => {
        const url = 'https://dummyjson.com/products'
        const options = { method: 'GET' }

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            setProductsList(data.products)
            setFilteredList(data.products)
        } catch (error) {
            alert(error as string)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        searchValue === '' && setFilteredList(productsList)
    }, [searchValue])

    const searchFiltered = () => {
        const searchedResults = productsList.filter(eachProduct =>
            eachProduct.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        )
        return searchedResults
    }
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
        const searchedResults = searchFiltered()
        setFilteredList(searchedResults)
    }

    const onClickSearchIcon = () => {
        const searchedResults = searchFiltered()
        setProductsList(searchedResults)
        setSearchValue('')
    }

    const onClickCard = (id: number) => {
        setId(id)
    }

    switch (option) {
        case 'Lowest':
            productsList.sort((prev, next) => { return (prev.price - next.price) })
            break;
        case 'Highest':
            productsList.sort((prev, next) => { return (next.price - prev.price) })
            break;
        default:
            break;
    }

    return (
        <Box sx={styles.bgContainer}>
            <Typography variant='h2' sx={styles.heading}>Search-Sort</Typography>
            <Box sx={styles.inputsContainer}>
                <Box sx={styles.searchContainer}>
                    <InputBase type='search' placeholder='Search Here' value={searchValue} onChange={onChangeSearch} sx={styles.userInput} />
                    <Search sx={styles.searchIcon} onClick={onClickSearchIcon} />
                </Box>
                <Box >
                    <FormControl sx={styles.priceFilterInput}>
                        <InputLabel htmlFor="grouped-select">Sort By</InputLabel>
                        <Select defaultValue="None" id="grouped-select" label="Sort By" onChange={(e) => setOption(e.target.value)}>
                            <MenuItem value={'None'}>None</MenuItem>
                            <MenuItem value={'Highest'}>Price(highest first)</MenuItem>
                            <MenuItem value={'Lowest'}>Price(lowest first)</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Box sx={styles.contentContainer}>
                {filteredList.length > 0 ?
                    <>
                        {filteredList.map(product => (
                            <Paper key={product.id} sx={styles.itemContainer} onClick={() => onClickCard(product.id)}>
                                <Box component='img' src={product.thumbnail} alt={product.title} sx={styles.image} />
                                <Box sx={styles.cardTextContainer}>
                                    <Box sx={styles.textContainer}>
                                        <Typography variant='h6' sx={styles.text}>{product.brand}</Typography>
                                        <Typography sx={id === product.id ? styles.selectedText : styles.text}>{product.title}</Typography>
                                    </Box>
                                    <Typography variant='h6' sx={styles.text}>Rs.{product.price}</Typography>
                                </Box>
                            </Paper>
                        ))}
                    </>
                    :
                    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'50vh'} width={'100%'}>
                        <Typography variant='h3'>No Data Found</Typography>
                    </Stack>
                }
            </Box>
        </Box>
    )
}

export default ProductsSearch



