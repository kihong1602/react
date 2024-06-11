import {ChangeEvent} from 'react'

export default function FileInput() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files[i]
        console.log(`file[${i}]: `, file)
      }
    }
  }
  return <input type={'file'} onChange={onChange} multiple={true} accept={'image/*'} />
}