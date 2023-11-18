import React from 'react';
import {useInfiniteQuery} from "@tanstack/react-query";
import {api} from "../core/api";
import {GetRandomCatsDto} from "./dto/get-random-cats.dto";


const getRandomCats = async ({pageParam = 0}) => {
    const {data} = await api.get<GetRandomCatsDto>('https://api.thecatapi.com/v1/images/search?', {
        params: {
            limit: 10,
            pageParam
        }
    })
    return data
}
export const useRandomCatData = () => {
    const {data, isLoading, isError, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
            queryKey: ['getRandomCats'],
            queryFn: getRandomCats,
            getNextPageParam: () => Date.now()
        }
    )

    return {data, isLoading, isError, fetchNextPage,isFetchingNextPage}
};




