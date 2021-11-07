import { useQuery } from "react-query";
import { api } from "../../hello";



export async function getTransactions(page) {
    const { data, headers } = await api.get('transactions', {
      params: {
        page,
      }
    })

    const totalCount = Number(headers['x-total-count']);

    const transactions = data.transactions.map(tx => {
      return {
        id: tx.id,
        name: tx.name,
        email: tx.email,
        createdAt: new Date(tx.createdAt).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      };
    })

    return {
      transactions,
      totalCount
    };
  }

export function useTransactions(page) {
  return useQuery(['transactions', page], () => getTransactions(page), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}
