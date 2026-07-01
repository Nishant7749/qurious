import book from '../assets/book.png'

export default function SidebarCreate({ currentStep }) {

    const steps = [
        { id: 1, title: "Quiz Details", description: "Begin by adding basic details of your quiz" },
        { id: 2, title: "Add Questions", description: "Add as many questions with 4 MCQs as you prefer" },
        { id: 3, title: "Review Quiz", description: "Make sure to review the quiz you just created" }
    ]


    return (
        <>
            <div className="mr-18 w-1/4 h-full border border-gray-800 flex flex-col items-center p-7 rounded-lg">

<img src={book} className='w-2/3 m-4' />
                <h1 className="text-2xl mb-2 font-roboto font-bold">Start The Journey</h1>
                <p className="text-gray-200 text-sm font-roboto">Go Though all 3 steps in order to build your quiz.</p>

                <div className="mt-18 p-4 flex flex-col gap-">
                    {steps.map((step) => (
                        <div className="flex gap-3">
                            <div className="flex flex-col items-center justify-center">
                                <div className={`flex font-bold items-center justify-center border border-blue-600 rounded-full p-2 w-10 ${step.id === currentStep ? "bg-blue-600 shadow-xl shadow-blue-800": ""}`}>{step.id}</div>

                                <div className="bg-blue-600 h-18 w-0.5 flex"></div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="font-roboto text-gray-100 mt-2">{step.title}</div>
                                <div className="font-roboto text-xs text-gray-300">{step.description}</div>
                            </div>

                        </div>
                    ))}

                    <div className="bg-blue-700 p-2 rounded-xl font-roboto flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer border border-blue-500 shadow-blue-900">Publish</div>
                </div>

            </div>
        </>
    )
}