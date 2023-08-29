// eslint-disable-next-line import/extensions
import { Input, InputProps } from 'components/ui/input'

function StyledInput(props: InputProps) {
  const { className, ...rest } = props

  return (
    <Input
      className={`min-h-[60px] placeholder:text-neutral-600 font-light text-sm px-5 rounded-none bg-light border-none outline-none focus:outline-none ${className}`}
      {...rest}
    />
  )
}

export default function Form() {
  return (
    <div className="h-full w-full bg-white flex flex-col gap-8 px-8 py-16 shadow-lg">
      <div className="text-[36px] font-light font-header text-center">
        Need to Make an Equiry?
      </div>
      <div className="grid grid-cols-2 gap-4">
        <StyledInput className="col-span-1" placeholder="Your Name*" />
        <StyledInput className="col-span-1" placeholder="Affiliation*" />
        <StyledInput className="col-span-1" placeholder="Email*" />
        <StyledInput className="col-span-1" placeholder="Number*" />
        <select
          className="min-h-[60px] placeholder:text-neutral-600 font-light text-sm p-5 rounded-none bg-light border-none outline-none focus:outline-none col-span-1"
          placeholder="Select Website*"
          defaultValue={undefined}
        >
          <option>Website 1</option>
          <option>Website 3</option>
          <option>Website 2</option>
        </select>
        <select
          className="min-h-[60px] placeholder:text-neutral-600 font-light text-sm p-5 rounded-none bg-light border-none outline-none focus:outline-none col-span-1"
          placeholder="Inquiry Department*"
          defaultValue={undefined}
        >
          <option>Website 1</option>
          <option>Website 3</option>
          <option>Website 2</option>
        </select>
        <StyledInput className="col-span-2" placeholder="Topic*" />
        <textarea
          className="min-h-[60px] placeholder:text-neutral-600 font-light text-sm p-5 rounded-none bg-light border-none outline-none focus:outline-none col-span-2"
          placeholder="Your Message*"
          rows={10}
        />
        <button className="w-full p-6 flex justify-center items-center col-span-2 bg-primary hover:bg-opacity-70 font-light text-xs tracking-[0.2rem] text-white">
          SUBMIT MESSAGE
        </button>
      </div>
    </div>
  )
}
