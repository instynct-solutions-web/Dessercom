<?php
// Permet de créer un excerpt
function strWordCut($string, $length, $end = '....')
{
    $string = strip_tags($string);

    if (strlen($string) > $length) {

        // truncate string
        $stringCut = substr($string, 0, $length);

        // make sure it ends in a word
        $string = substr($stringCut, 0, strrpos($stringCut, ' ')) . $end;
    }
    return $string;
}
