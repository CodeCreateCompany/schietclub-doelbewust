
<?php 

/// <summary>
/// Echo's the given class if the request uri matches the current page uri.
/// @uri:string will be checked for equality against the request url.
/// @class:string: will be echo'd in the html code.
/// @tag:bool: determines if the class tag will be included.
/// </summary>
function IncludeClassOnClick($class, $uri, $tag = true)
{
    $current_file_name = basename($_SERVER['REQUEST_URI'], ".php");

    if ($current_file_name == $uri)
    {
        echo ($tag) ? 'class="'.$class.'"' : $class;
    }
}

?>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <!-- Toggle button for small screen sizes. -->
            <div class="text-center">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-content" aria-expanded="false">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="navbar-brand">
                <img src="img/logo-klein.png">
                <p style="float: left">Doelbewust</p>
            </div>
        </div>

        <!-- Navbar content,  -->
        <div class="collapse navbar-collapse" id="navbar-content">
            <ul class="nav navbar-nav">
                <li <?=IncludeClassOnClick("active", "info")?> ><a href="info.php">Info</a></li>
                <li <?=IncludeClassOnClick("active", "contact")?> ><a href="contact.php">Contact</a></li>
                <li <?=IncludeClassOnClick("active", "historie")?> ><a href="historie.php">Historie</a></li>
                <li <?=IncludeClassOnClick("active", "evenementen")?> ><a href="evenementen.php">Evenementen</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Wedstrijden <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li <?=IncludeClassOnClick("active", "evenementen")?>><a href="wedstrijden.php">Agenda</a></li>
                        <li <?=IncludeClassOnClick("active", "uitslagen")?>><a href="uitslagen.php">Uitslagen</a></li>
                    </ul>
                </li>
            </ul>
        </div> <!-- /.navbar-collapse -->
    </div><!-- /.container -->
</nav>