import {GetSingleCatDto} from "./dto/get-single-cat.dto";
import {api} from "../core/api";
import {useQuery} from "@tanstack/react-query";

interface GetSingleCatParams {
    id: string;
}

const getSingleCat = async ({id}: GetSingleCatParams) => {
    const {data} = await api.get<GetSingleCatDto>(
        `https://api.thecatapi.com/v1/images/${id}`
    );

    return data;
};

interface UseSingleCatDataParams {
    id: string | null;
}

export const useSingleCatsData = ({id}: UseSingleCatDataParams) => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['getSingleCat'],
        queryFn: () => getSingleCat({id: id || ''}),
        enabled: false
    })


    return {
        data,
        isError,
        isLoading
    }
}

