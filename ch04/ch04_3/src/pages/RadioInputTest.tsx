import * as D from '../data'
import {ChangeEvent, useCallback, useMemo, useState} from 'react'
import {Subtitle, Title} from '../components'

export default function RadioInputTest() {
  const jobTitles = useMemo(() =>
      D.makeArray(4)
       .map(D.randomJobTitle)
    , [])

  const [selectedJobTitle, setSelectedJotTitle] = useState<string>(jobTitles[0])
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelectedJotTitle(_ => e.target.value)
  }, [])

  const radioInputs = useMemo(() =>
      jobTitles.map((value, index) => (
        <label key={index} className={'flex justify-start cursor-pointer label'}>
          <input type={'radio'}
                 name={'jobs'}
                 className={'mr-4 radio radio-primary'}
                 checked={value === selectedJobTitle}
                 defaultValue={value}
                 onChange={onChange}
          />
          <span className={'label-text'}>{value}</span>
        </label>
      ))
    , [jobTitles, selectedJobTitle, onChange])

  return (
    <section className={'mt-4'}>
      <Title>RadioInputTest</Title>
      <div className={'flex flex-col justify-center mt-4'}>
        <Subtitle>What is your job?</Subtitle>
        <Subtitle className={'mt-4'}>Selected Job: </Subtitle>
        <div className={'flex justify-center p-4 mt-4'}>
          <div className={'flex flex-col mt-4'}>{radioInputs}</div>
        </div>
      </div>
    </section>
  )
}