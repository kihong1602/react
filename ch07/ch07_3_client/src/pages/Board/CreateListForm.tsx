import * as D from '../../data'
import {ChangeEvent, FC, useCallback, useState} from 'react'
import {Icon} from '../../theme/daisyui'

export type CreateListFormProps = {
  onCreateList: (uuid: string, title: string) => void
}

const CreateListForm: FC<CreateListFormProps> = ({onCreateList}) => {
  const [value, setValue] = useState<string>(D.randomTitleText)

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value)
  }, [])

  const addList = useCallback(() => {
    onCreateList(D.randomUUID(), value)
    setValue(() => D.randomTitleText())
  }, [value, onCreateList])

  return (
    <div className={'flex p-2'}>
      <input placeholder={'title'}
             value={value} onChange={onChange}
             className={'input-xs input-bordered input input-primary'} />
      <Icon name={'add'} onClick={addList} disabled={!value.length} className={'btn-xs btn-primary ml-2'} />
    </div>
  )
}

export default CreateListForm