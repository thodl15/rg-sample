export const CHANGE_QUOTE_PARAMS = 'CHANGE_QUOTE_PARAMS'
export const GET_QUOTE_LIST      = 'GET_QUOTE_LIST'

export function changeQuoteParams(paramsObj) {
    return {
        type: CHANGE_QUOTE_PARAMS,
        loanSize:     paramsObj.loanSize,
        creditScore:  paramsObj.creditScore,
        propertyType: paramsObj.propertyType,
        occupancy:    paramsObj.occupancy,
    }
}

export function getQuoteList(fetchRes) {
    return {
        type: GET_QUOTE_LIST,
        quoteList: fetchRes.quoteList,
    }
}