import { api } from '@/lib/axios'

interface UpdateUserImageBody {
  file: File
}

interface UpdateUserImageResponse {
  imgUrl: string
}

export async function updateUserImage({ file }: UpdateUserImageBody) {
  const response = await api.post<UpdateUserImageResponse>(
    '/arquivo/upload-imagem',
    { file },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )

  return response.data
}
