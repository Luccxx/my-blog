<?php 
function queryHomeMyPosts(){
    function returnDataPost(){
        require_once 'src/conf/db.php';

        $mysql = new DatabaseConnection();
        $link = $mysql->getLink();

        $sql = "SELECT * FROM my_posts";
        $result = $link->query($sql);

        return $result;
    }

    function FormattedUrl($queryUrl){
        $caracters = array(
            'á' => 'a',
            'à' => 'a',
            'â' => 'a',
            'ã' => 'a',
            'é' => 'e',
            'ê' => 'e',
            'í' => 'i',
            'ó' => 'o',
            'ô' => 'o',
            'õ' => 'o',
            'ú' => 'u',
            'ç' => 'c',
            ',' => '',
            "'" => '',
            "!" => '',
            "?" => ''
        );

        $urlPost = $queryUrl;
        $explodeUrl = explode(" ", $urlPost); //separa url
        $newUrl = array_slice($explodeUrl, 3); //pega da terceira posição até o final do array 
        $removeCaracters = array_map(function($word) use ($caracters) {
            return strtr($word, $caracters);
        }, $newUrl);
        $implodeUrl = implode("-", $removeCaracters); // junta todos os array com "-" 

        return $implodeUrl; 
    }

    function takeData($allData){
        $arrayMounth = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", 
        "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        $data = date("n", strtotime($allData)); //Month 
        $year = date("Y", strtotime($allData));
        $time = date("H:i", strtotime($allData));
        $day = date("d", strtotime($allData));

        return array(
            "month" => $arrayMounth[$data],
            "year" => $year,
            "time" => $time,
            "day" => $day
        );
    }

    $result = returnDataPost();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data = $row['current_data'];
            $url = $row['title'];
            $url = FormattedUrl($url);

            $formatted_data = takeData($data);
            $month = $formatted_data['month'];
            $year = $formatted_data['year'];
            $time = $formatted_data['time'];
            $day = $formatted_data['day'];

            echo "
            <div class='class_time_post'>
                <label>$year - $month</label>
            </div>
            <div class='div_master_only_post'>
                <a href='post/{$url}'>
                    <div class='div_only_post' title='Post in ~ $time'>
                        <label class='label_title_post'>{$row['title']}</label> 
                        <label class='label_fullData_post'>$day $month $year · $time</label>
                    </div>
                </a>
            </div>
            ";
        }   
    }
}
?>