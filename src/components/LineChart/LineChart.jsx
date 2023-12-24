import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    // const mathMarksData = [
    //     { id: 1, name: 'Alice', marks: 85 },
    //     { id: 2, name: 'Bob', marks: 78 },
    //     { id: 3, name: 'Charlie', marks: 92 },
    //     { id: 4, name: 'David', marks: 64 },
    //     { id: 5, name: 'Emma', marks: 75 },
    //     { id: 6, name: 'Frank', marks: 88 },
    //     { id: 7, name: 'Grace', marks: 70 },
    //     { id: 8, name: 'Henry', marks: 95 },
    //     { id: 9, name: 'Iris', marks: 82 },
    //     { id: 10, name: 'Jack', marks: 79 }
    //   ];
    const mathMarksData = [
        { id: 1, name: 'Alice', math: 85, physics: 90, chemistry: 88 },
        { id: 2, name: 'Bob', math: 78, physics: 85, chemistry: 92 },
        { id: 3, name: 'Charlie', math: 92, physics: 88, chemistry: 95 },
        { id: 4, name: 'David', math: 64, physics: 72, chemistry: 68 },
        { id: 5, name: 'Emma', math: 75, physics: 80, chemistry: 76 },
        { id: 6, name: 'Frank', math: 88, physics: 92, chemistry: 89 },
        { id: 7, name: 'Grace', math: 70, physics: 78, chemistry: 80 },
        { id: 8, name: 'Henry', math: 95, physics: 96, chemistry: 94 },
        { id: 9, name: 'Iris', math: 82, physics: 88, chemistry: 85 },
        { id: 10, name: 'Jack', math: 79, physics: 84, chemistry: 90 }
      ];
      
      

    return (
        <div>
            <LChart  width={1000} height={500} data={mathMarksData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey='math' stroke='gray'></Line>
                <Line dataKey='chemistry'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;