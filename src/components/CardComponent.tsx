import { taskInterface } from "../interfaces/taskInterface"

interface CardComponentPropsI {
    task: taskInterface
}

export const CardComponent = ({task: { name, initDate, dueDate, comment, tags}}: CardComponentPropsI) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">                  
        <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">{name}</h3>
            <p className="text-gray-700 text-base mb-2">
                {comment}
            </p>
            <p className="text-gray-700 text-base rounded-ee px-3 border-2 text-l mb-2">
                <strong className="text-sm">Init Date:</strong> {initDate}
            </p>
            <p className="text-gray-700 text-base rounded-ee px-3 border-2 text-l">
                <strong className="text-sm">Due Date:</strong> {dueDate}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2 border-t-2 border-emerald-800">            
        {
            tags.map((tag, i) => {
                return <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            })
        }
        </div>
    </div>
  )
}
