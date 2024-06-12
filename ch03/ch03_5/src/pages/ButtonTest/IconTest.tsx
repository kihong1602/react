import {Icon} from '../../theme/daisyui'

export default function IconTest() {
  const onClick = () => alert('Icon clicked')
  return (
    <section className={'mt-4'}>
      <h2 className={'font-bold text-3wl text-center'}>IconTest</h2>
      <div className={'flex items-center justify-around mt-4'}>
        <Icon className={'btn-primary btn-lg'} name={'settings'} onClick={onClick} />
        <Icon className={'btn-primary btn-md'} name={'done'} onClick={onClick} />
        <Icon className={'btn-primary btn-sm'} name={'menu'} onClick={onClick} />
        <Icon className={'btn-primary btn-xs'} name={'file_upload'} onClick={onClick} />
      </div>
    </section>
  )
}