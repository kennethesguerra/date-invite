export default function Question({
  id, 
  title,
  answer,
  actual_answer,
  onChangeAnswer,
  error
} : {
  id: number,
  title: string,
  answer: string[],
  actual_answer: any,
  onChangeAnswer: any,
  error: string
}) {
  return (
    <>
      <div className="mt-5 mb-5">
        <p>{ title }</p>
        <input type="text" 
          className="text-black"
          name={"answer-" + id} 
          id={"answer-" + id}
          defaultValue={actual_answer}
          onChange={(e) => {
            console.log(e.target.value)
            onChangeAnswer(e.target.value, id)
          }}
          />
        { error && (
          <p className="text-xs text-red-400">{error}</p>
        )}
      </div>
    </>
  )
}