
type QuestionProps = {
  id: number,
  title: string,
  answer: string[],
  actual_answer: any,
  onChangeAnswer: any,
  error: string
}

export default function Question({
  id, 
  title,
  actual_answer,
  onChangeAnswer,
  error
}: QuestionProps ) {
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